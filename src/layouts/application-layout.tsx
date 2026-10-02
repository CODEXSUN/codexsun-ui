import type { ComponentProps } from "react";
import { AppLayout } from "./app-layout";

export function ApplicationLayout(props: ComponentProps<typeof AppLayout>) {
  return <AppLayout {...props} />;
}
