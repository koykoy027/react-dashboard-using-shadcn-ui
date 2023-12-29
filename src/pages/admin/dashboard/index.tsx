import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              veritatis amet deserunt incidunt ducimus mollitia!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              deleniti, illo itaque vero porro omnis.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              veritatis amet deserunt incidunt ducimus mollitia!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              deleniti, illo itaque vero porro omnis.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              veritatis amet deserunt incidunt ducimus mollitia!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              deleniti, illo itaque vero porro omnis.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              veritatis amet deserunt incidunt ducimus mollitia!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              deleniti, illo itaque vero porro omnis.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Index;
