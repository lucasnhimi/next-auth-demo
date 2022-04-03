import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function useRequireAuth() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session && typeof session != "undefined") {
      router.push("/login");
    }
  }, [session, router]);

  return session;
}

export default useRequireAuth;
