import Link from 'next/link';

const Form = ({ type, post, setPost, submiting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient"> {type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} Your Masterpiece: Crafting Posts that Inspire, Connect, and Share
        Your Story with the World
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font font-semibold text-base text-gray-700">
            Your post
          </span>
          <textarea
            value={post.text}
            placeholder="Write your post here..."
            onChange={(e) => {
              setPost({ ...post, text: e.target.value });
            }}
            className="form_textarea"
            required
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font font-semibold text-base text-gray-700">
            Tags{' '}
            <span className="font-normal">
              (ex: #product, #webdevelopment, #bloging)
            </span>
          </span>
          <input
            value={post.tag}
            placeholder="#tag"
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submiting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submiting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
