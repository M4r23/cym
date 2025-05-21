export default function Icon ({ src, widht }) {
  return (
    <section className="flex justify-center">
      <img
        src={src}
        className={`${widht} fill-cyan-600`}
        alt="Buho Button"
      />
    </section>
  )
}