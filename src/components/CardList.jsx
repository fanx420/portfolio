export default function CardList({ title, description, img, techs = [], link = "" }) {
  return (
    <a href={link} target="_blank">
      <div className="w-full rounded-xl p-2 hover:bg-gray-700 transition-colors duration-300 flex my-2">
        
        <div className="w-50 h-28 flex-shrink-0 overflow-hidden rounded-2xl">
          <img 
            className="w-full h-full object-cover" 
            src={img} 
            alt={title} 
          />
        </div>

        <div className="flex flex-col justify-center ml-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-800 text-white px-3 py-1 text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
