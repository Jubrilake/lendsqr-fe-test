import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { cardData } from "@/data/usersCardData";

const UsersCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <Card key={index} x-chunk={`dashboard-01-chunk-${index}`}>
          <CardHeader className="flex flex-col space-y-3 pb-2">
            <img className="w-10 h-10" src={card.icon} alt="" />
            <CardTitle className="text-sm font-medium text-[#545F7D]">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UsersCard;
