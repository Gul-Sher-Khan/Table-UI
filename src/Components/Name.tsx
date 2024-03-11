const Name = ({ name, url }: { name: string; url: string }) => {
  return (
    <div className="flex items-center">
      <img
        src={url}
        className="rounded-full h-10 w-12 md:h-11 md:w-14 lg:h-12 lg:w-15"
        alt={name}
      />
      <h1 className="font-bold ml-4">{name}</h1>
    </div>
  );
};

export default Name;
