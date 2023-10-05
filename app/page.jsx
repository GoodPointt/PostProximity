import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Posts that Matter, Shared Better!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          One App, Endless Posts.
        </span>
      </h1>
      <p className="desc text-center">
        PostProximity is a cutting-edge open-source app designed to simplify and
        enhance the way you create, share, and engage with your digital content.
        We believe that the world should have access to a powerful and
        customizable platform for sharing stories, thoughts, and moments without
        limitations.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
