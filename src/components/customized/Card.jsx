import Button from "../common/Button";

export default function Card({ type, image, header, paragraph, onClick }) {
  return (
    <>
      {type === "image" ? (
        <img src={image} className="min-w-[300px] h-[300px]"></img>
      ) : (
        <div className="bg-[var(--second-color)] w-[300px] h-[300px] p-4 text-[var(--main-color)] flex flex-col items-center justify-center gap-[60px] hover:shadow-[inset_0_0_20px_#fff8] transition">
          <h2 className="text-[30px]">{header}</h2>
          <p className="text-center">{paragraph}</p>
          <Button
            buttonName="عرض المزيد"
            className="bg-[var(--main-color)] text-[var(--second-color)] border-solid py-1.5 px-5 rounded w-fit cursor-pointer"
            onClick={onClick}
          />
        </div>
      )}
    </>
  );
}
