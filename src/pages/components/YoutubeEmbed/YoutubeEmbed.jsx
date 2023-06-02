export default function YoutubeEmbed() {
  return (
    <div className="max-w-[1400px] mx-auto border border-black">
      <div>ini youtube embed</div>
      <div className="border border-red-800 max-w-screen-md mx-auto">
        <div className="bg-yellow-800 aspect-w-16 aspect-h-13 m-6">
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="md:w-[80%] w-full aspect-video mx-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
