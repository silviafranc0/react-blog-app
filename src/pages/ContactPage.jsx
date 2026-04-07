function ContactPage() {
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full border p-2 rounded"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>

        </div>
    );
}

export default ContactPage;