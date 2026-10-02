import type { ComponentProps } from "react";
import { AppLayout } from "./app-layout";

export function SuperLayout(props: ComponentProps<typeof AppLayout>) {
  return <AppLayout {...props} />;
}
