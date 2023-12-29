import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

const SettingsMain: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rem,
            dicta mollitia tempora magni odio?
          </CardDescription>
          <CardContent>
            <Tabs defaultValue="Gender" className="w-100">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="Gender">Gender</TabsTrigger>
                <TabsTrigger value="Civil Status">Civil Status</TabsTrigger>
                <TabsTrigger value="Religion">Religion</TabsTrigger>
              </TabsList>
              <TabsContent value="Gender">
                <Card>
                  <CardHeader>
                    <CardTitle>Gender</CardTitle>
                    <CardDescription>
                      Make changes to your Gender here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="Civil Status">
                <Card>
                  <CardHeader>
                    <CardTitle>Civil Status</CardTitle>
                    <CardDescription>
                      Make changes to your Civil Status here. Click save when
                      you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Religion">
                <Card>
                  <CardHeader>
                    <CardTitle>Religion</CardTitle>
                    <CardDescription>
                      Make changes to your Religion here. Click save when
                      you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};
export default SettingsMain;
