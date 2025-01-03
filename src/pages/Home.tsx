import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Navbar from "@/components/Navbar"
import { MagicCard } from "@/components/ui/magic-card"

const Home = () => {
  return (
    <>
      <header className="p-2 px-3 md:px-20 lg:px-36 h-fit">
        <Navbar />
        <section>
          <Carousel plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]} className="w-full max-w-sm md:max-w-7xl mx-auto mt-10 lg:mt-2">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full"
                >
                  <div className="">
                    <Card>
                      <CardContent className=" flex items-center justify-center">
                        <img className="rounded-xl"
                          src="https://plus.unsplash.com/premium_photo-1725708358944-844db020a73a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </header>
      <section className="p-2 px-3 md:px-20 lg:px-36 h-screen mt-10">
      <h1 className="font-mono text-4xl font-bold tracking-tight mb-5">Movies</h1>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <MagicCard
            className="w-40 h-52 pb-6 cursor-pointer flex-col items-center justify-end whitespace-nowrap text-4xl shadow-2xl border-2 border-red-500"
          >
            <div className="text-sm">
              <h1 className="font-extrabold">Title</h1>
              <p className="text-sm">Release Year</p>
            </div>
          </MagicCard>

        </div>
      </section>
    </>
  )
}

export default Home