import { toast } from "sonner";

export default function toastSupport() {
  toast.error("Something didn't go as planned", {
    description:
      "A ticket has been sent to support. We will work as quickly as possible to resolve it.",
    position: "top-center",
  });
}
