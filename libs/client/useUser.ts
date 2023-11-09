import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/create-account");
      //지금 여기 경로를 log-in에서 create-account으로 바꾼거긴 한데
      //그래도 이상하니 다시 보기
    }
  }, [data, router]);
  return { user: data?.email, isLoading: !data && !error };
  //user: data?.name 이 부분을 현재 email로 바꿔둠 - 변화는 없넹
  //콘솔 에러 보면 한 번은 api/users/me 에서 에러가 나고 한 번은 api/tweets에서 에러가 나네~
}
