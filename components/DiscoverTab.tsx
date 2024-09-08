import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export function DiscoverTab() {
  return (
    <Tabs defaultValue="account" className=" relative w-full">
      <TabsList className="grid w-full lg:w-[40%] grid-cols-4">
        <TabsTrigger value="sustainability" className="text-sm lg:text-base">
          Sustainability
        </TabsTrigger>
        <TabsTrigger value="comfort" className="text-sm lg:text-base">
          Comfort
        </TabsTrigger>
        <TabsTrigger value="durability" className="text-sm lg:text-base">
          Durability
        </TabsTrigger>
        <TabsTrigger value="versatility" className="text-sm lg:text-base">
          Versatility
        </TabsTrigger>
      </TabsList>
      <Separator className=" bg-gray-200 absolute top-[px] h-[1px] w-full " />
      <TabsContent value="sustainability" className="pt-4">
        <Card className="flex flex-col lg:flex-row gap-8">
          <div className=" w-full lg:w-[500px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/summer.jpg"
              alt="image summer"
              width={300}
              height={250}
              className="flex-1 w-full h-full object-cover "
            />
          </div>
          <div className="flex-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Eco-Friendly Choice</CardTitle>
              <CardDescription className="text-sm lg:text-base">
                With our sustainable approach, we curate clothing that makes a
                statement of care for the planet and for the art of fashion.
              </CardDescription>
            </CardHeader>
            <CardContent className=" hidden  mt-5 md:flex items-center flex-wrap gap-6 lg:gap-8 lg:w-[80%]">
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className=" size-3 lg:size-5 text-violet" />
                </div>
                <p className="text-sm lg:text-base">Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className=" size-3 lg:size-5 text-violet" />
                </div>
                <p className="text-sm lg:text-base">Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className=" size-3 lg:size-5 text-violet" />
                </div>
                <p className="text-sm lg:text-base">Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className=" size-3 lg:size-5 text-violet" />
                </div>
                <p className="text-sm lg:text-base">Recycled Materials</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="comfort" className="pt-4">
        <Card className="flex gap-8">
          <div className="w-[500px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/woman.jpg"
              alt="image summer"
              width={300}
              height={250}
              className="flex-1 w-full h-full object-cover"
            />
          </div>
          <div className="flex-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Eco-Friendly Choice</CardTitle>
              <CardDescription>
                With our sustainable approach, we curate clothing that makes a
                statement of care for the planet and for the art of fashion.
              </CardDescription>
            </CardHeader>
            <CardContent className=" mt-5 flex items-center flex-wrap gap-8 w-[80%]">
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="durability" className="pt-4">
        <Card className="flex gap-8">
          <div className="w-[500px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/fashion.webp"
              alt="image summer"
              width={300}
              height={250}
              className="flex-1 w-full h-full object-cover"
            />
          </div>
          <div className="flex-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Eco-Friendly Choice</CardTitle>
              <CardDescription>
                With our sustainable approach, we curate clothing that makes a
                statement of care for the planet and for the art of fashion.
              </CardDescription>
            </CardHeader>
            <CardContent className=" mt-5 flex items-center flex-wrap gap-8 w-[80%]">
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="versatility" className="pt-4">
        <Card className="flex gap-8">
          <div className="w-[500px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/summer.jpg"
              alt="image summer"
              width={300}
              height={250}
              className="flex-1 w-full h-full object-cover"
            />
          </div>
          <div className="flex-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Eco-Friendly Choice</CardTitle>
              <CardDescription>
                With our sustainable approach, we curate clothing that makes a
                statement of care for the planet and for the art of fashion.
              </CardDescription>
            </CardHeader>
            <CardContent className=" mt-5 flex items-center flex-wrap gap-8 w-[80%]">
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white drop-shadow-sm border rounded-full p-2 w-fit">
                  <ArrowPathIcon className="size-5 text-violet" />
                </div>
                <p>Recycled Materials</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
