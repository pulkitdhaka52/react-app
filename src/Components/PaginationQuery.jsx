import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function PaginationQuery() {
  const [page, setPage] = useState(1);
  const limit = 3;
  const queryClient = useQueryClient();

  // Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, limit),
    keepPreviousData: true,
  });

  // Mutation
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // invalidate cache so query refetches
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (isLoading) return <h2>Data is loading...</h2>;
  if (isError) return <h2>Error fetching users</h2>;

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <ul>
        {data?.users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        {Array.from({ length: data.totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setPage(index + 1)}
            style={{
              padding: "5px 10px",
              backgroundColor: page === index + 1 ? "lightblue" : "white",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Add User Button */}
      <button
        onClick={() =>
          addUserMutation.mutate({ name: "New User " + Date.now() })
        }
        style={{
          marginTop: "15px",
          padding: "5px 10px",
          background: "green",
          color: "white",
          border: "none",
        }}
      >
        {addUserMutation.isPending ? "Adding..." : "Add User"}
      </button>
    </div>
  );
}

// Query function
async function getUsers(page, limit) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  const totalCount = response.headers.get("X-Total-Count") || 10; // fallback for /users
  const data = await response.json();

  return {
    users: data,
    totalPages: Math.ceil(totalCount / limit),
  };
}

// Mutation function
async function addUser(newUser) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return response.json();
}
