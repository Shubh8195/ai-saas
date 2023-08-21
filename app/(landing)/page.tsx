import { Button } from "@/components/ui/button";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      Landing Page (unprotected)
      <div className="flex gap-3">
        <Link href="/sign-in">
          <Button variant="secondary">Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="secondary">Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
