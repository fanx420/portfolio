export default function CardList({title, description, imgStyle, img, techs = [] }) {
  return (
    <div className="w-full rounded-xl p-2 hover:bg-gray-700 transition-colors duration-300 flex my-2">
      <div className="flex flex-row gap-2">
        <img className={imgStyle} src={img} alt="image" />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className=" rounded-full bg-gray-800 text-white px-3 py-1 text-[10px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
