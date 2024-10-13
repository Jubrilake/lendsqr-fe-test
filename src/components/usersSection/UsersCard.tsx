import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { cardData } from "@/data/usersCardData";

const UsersCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <Card
          style={{ border: "none" }}
          key={index}
          x-chunk={`dashboard-01-chunk-${index}`}
          data-testid={`summary-card-${index}`}
        >
          <CardHeader className="flex flex-col space-y-3 pb-2">
            <card.icon />
            <CardTitle
              className="text-sm font-medium text-[#545F7D]"
              data-testid={`card-title-${index}`}
            >
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="text-2xl font-bold text-primary"
              data-testid={`card-value-${index}`}
            >
              {card.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UsersCard;
