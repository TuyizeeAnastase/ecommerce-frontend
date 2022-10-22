export const Blog = () => {
  return (
    <div className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h1 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our recent news
              </h1>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  className="w-full"
                  alt="blog_pic"
                  src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923712/resize-1674923684927828523newShop_rtcngq.jpg"
                />
              </div>
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                Dec 22, 2023
              </span>
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  New shop Musanze
                </a>
              </h3>
              <p className="text-base text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  className="w-full"
                  alt="blog_pic"
                  src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923518/Expo-50f9f_nfew1m.png"
                />
              </div>
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                Sept 22, 2023
              </span>
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Our Export Ground site
                </a>
              </h3>
              <p className="text-base text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  className="w-full"
                  alt="blog_pic"
                  src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923801/resize-1674923764522643318newPr_iw7upv.jpg"
                />
              </div>
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                June 22, 2023
              </span>
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  New Makita Product
                </a>
              </h3>
              <p className="text-base text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
