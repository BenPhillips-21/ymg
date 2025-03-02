import { ebGaramond } from "@/components/ui/fonts";
import { Main } from "@/components/ui/main";
import Image from 'next/image'; // Assuming you're using Next.js Image component

export default function Page() {
  return (
    <Main>
      <div className="p-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          <h1 className={`text-2xl font-bold mb-4 ${ebGaramond.className}`}>
            YMG Origins
          </h1>
          <p className={`mb-5 ${ebGaramond.className}`}>
            When Fr Ken Barker MGL was in Assisi in the Jubilee Year 2000 praying
            in the small church where St Francis and his brothers spent much of
            their time, he sensed the Lord wanted a movement of young men in
            Australia, which would spread also to other countries.
          </p>
          <p className={`mb-4 ${ebGaramond.className}`}>
            He sensed the Lord wanted young men to rise up in the Church today
            with a deep faith, purity of heart, and strength of character, to
            become leaders for the future. The Lord wanted to help young men to
            change; to know they can be made new.
          </p>
          <p className={`mb-4 ${ebGaramond.className}`}>
            Fr Ken shared this vision with some young men in Canberra who had
            already begun to gather with other young men to support one another
            around, sport, teachings, and personal sharing. They shared the
            vision together and a movement was born.
          </p>
          <p className={`mb-4 ${ebGaramond.className}`}>
            During Covid, and due to other influences, the movement lost
            momentum. We are now in a moment of renaissance with renewed vision
            and vigour to fulfill the Lord’s dream for men. This renewal has
            been assisted by a strong group of young men in Adelaide led by
            Charl Abd elmalk who in 2024 decided to change their original name
            and come into communion with YMG.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/images/kenny.png"
            alt="Fr Ken Baker"
            width={500}
            height={500}
            className="mb-2"
          />
          <h1 className={`text-center ${ebGaramond.className}`}>
            Fr Ken Baker
          </h1>
        </div>
      </div>
    </Main>
  );
}