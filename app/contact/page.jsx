const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
        />

        <textarea
          placeholder="Message"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>

        <button className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;