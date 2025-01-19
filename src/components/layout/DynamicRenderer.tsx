import { Spinner } from "@/@core/components/ui/Spinner";

type Props = {
  isLoading: boolean;
  hasContent: boolean;
  ContentComponent: JSX.Element;
  EmptyComponent: JSX.Element;
  LoadingComponent?: JSX.Element;
};

export default function DynamicRenderer({
  isLoading,
  hasContent,
  ContentComponent,
  EmptyComponent,
  LoadingComponent = <DefaultLoading />,
}: Props) {
  if (isLoading) {
    return LoadingComponent;
  }

  if (!hasContent) {
    return EmptyComponent;
  }

  return ContentComponent;
}

function DefaultLoading() {
  return (
    <div className="flex flex-1 w-full items-center justify-center p-6">
      <Spinner size={"large"} />
    </div>
  );
}
