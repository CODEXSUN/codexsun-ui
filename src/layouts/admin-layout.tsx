import type { ComponentProps } from "react";
import { AppLayout } from "./app-layout";

export function AdminLayout(props: ComponentProps<typeof AppLayout>) {
  return <AppLayout {...props} />;
}
