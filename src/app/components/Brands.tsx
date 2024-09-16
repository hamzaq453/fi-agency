import Image from 'next/image';
import Logo from '../../../public/Logo.jpg';
import BrandZA from '../../../public/BrandZA.png';
import BrandOXO from '../../../public/BrandOXO.jpg';
import BrandRC from '../../../public/BrandRC.jpg';
import BrandWH from '../../../public/BrandWH.png';
import BrandCreateMax from '../../../public/BrandMax.jpg';

export default function Brands() {
  return (
    <section className="py-16 bg-gray-60">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">We Have Driven Impact At</h2>
        </div>

        {/* Sliding panel container */}
        <div className="relative overflow-hidden">
          <div
            className="flex flex-wrap gap-8 items-center justify-center"
            style={{ width: '100%' }}
          >
            {/* Logos */}
            <div className="flex gap-8 justify-center flex-wrap">
              <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]">
                <Image
                  src={BrandCreateMax}
                  alt="Peet's Coffee"
                  className="mx-auto"
                  width="90"
                  height="60"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]">
                <Image
                  src={BrandRC}
                  alt="Polymath"
                  className="mx-auto"
                  width="90"
                  height="60"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]">
                <Image
                  src={BrandWH}
                  alt="Lever"
                  className="mx-auto"
                  width="90"
                  height="60"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]">
                <Image
                  src={BrandOXO}
                  alt="Salesforce"
                  className="mx-auto"
                  width="90"
                  height="60"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]">
                <Image
                  src={BrandZA}
                  alt="Bluehost"
                  className="mx-auto"
                  width="90"
                  height="60"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
