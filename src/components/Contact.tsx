import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">

      <div className="grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-8">
            Let’s <span className="italic">collaborate</span>.
          </h2>

          <p className="text-gray-500 mb-12 max-w-sm">
            For all inquiries regarding film, television, or stage bookings,
            please contact my representatives.
          </p>

          <div className="space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-2">
                Representation (UK)
              </span>
              <p className="text-xl font-serif">
                The Artists Partnership
              </p>
              <p className="text-gray-500">
                info@theartistspartnership.co.uk
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-2">
                Representation (US)
              </span>
              <p className="text-xl font-serif">
                United Talent Agency
              </p>
              <p className="text-gray-500">
                reed.office@unitedtalent.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-10 rounded-xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400">
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 transition"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400">
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 transition"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Subject
                </label>
                <input
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 transition"
                  type="text"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full uppercase text-sm tracking-widest hover:opacity-90 transition"
              >
                Send Inquiry
              </button>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-center"
            >
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  Message Sent
                </h3>
                <p className="text-gray-500">
                  We’ll get back to you shortly.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>

    </section>
  )
}