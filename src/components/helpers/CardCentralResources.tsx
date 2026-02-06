import CardResourceSpace from "@/components/helpers/CardResourceSpace.tsx";
import type { CentralResources } from "@/types/cards.ts";

type Props = {
  centralResources: CentralResources;
};

const CardCentralResources = (props: Props) => {
  const { centralResources } = props;

  if (centralResources.length <= 0) return null;

  const mapResources = () => {
    return centralResources.map((resource, idx) => (
      <div
        key={`${resource}-${idx}`}
        className="image-container aspect-square w-1/2"
      >
        {CardResourceSpace(resource)}
      </div>
    ));
  };

  return (
    <div className="bg-primary-cream py-central gap-central w-corner-width absolute top-0 right-0 bottom-0 left-0 m-auto flex h-fit flex-col items-center justify-center">
      {mapResources()}
    </div>
  );
};

export default CardCentralResources;
