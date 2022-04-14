## React-query

### React-query 장점 

React를 위한 강력하고 성능 좋은 데이터 동기화 <br/>
"전역 상태"를 건드리지 않고도 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트할 수 있습니다.

#### 간단한 예제


```

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{" "}
      <strong> {data.stargazers_count}</strong>{" "}
      <strong> {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}


```

### 좀더 심플하게 

```

function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}


```

### 훅으로변경

```
/****usePos  ***/
import { useQuery } from "react-query";
import axios from "axios";

const getPostById = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};

export default function usePost(postId) {
  return useQuery(["post", postId], () => getPostById(postId));
}

/***index***/

import usePosts from "./hooks/usePosts";


const queryClient = useQueryClient();
const { status, data, error, isFetching } = usePosts();

function Posts({ setPostId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can use the queryCache here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}


```


