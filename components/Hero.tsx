import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col relative shrink-0 box-border px-5 ">
      <section className="flex flex-col relative shrink-0 box-border w-full self-stretch grow max-w-[1200px] items-stretch mx-auto">
        <div className="flex flex-col relative shrink-0 box-border min-h-[100px] w-auto self-stretch max-w-[1200px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F94efb1e0a1ff4ca68462da2c89111a8c%2F026263f01fe849bca5dbf38cff00de77"
            className="aspect-[2.7] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
          />
        </div>
      </section>
    </div>
  );
};
