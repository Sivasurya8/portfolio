import './CatchMe.css';



export default function CatchMe() {
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    const mailtoLink = `mailto:sivasurya8@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact: ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="section catchme-section" id="catchme">
      <div className="container contact-retro-container">
        
        <div className="retro-header-row">
          <div className="title-wrapper">
            <span className="badge">TOP</span>
            <h2 className="retro-title">CATCH ME</h2>
          </div>
        </div>

        <form className="retro-form" onSubmit={handleSend}>
          <div className="retro-form-left">
            <input type="text" name="name" placeholder="Your Name*" required />
            <input type="email" name="email" placeholder="Your e-mail address*" required />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          
          <div className="retro-form-right">
            <textarea name="message" placeholder="Type here your message...*" required></textarea>
            <div className="submit-wrapper">
              <button type="submit">SEND!</button>
            </div>
          </div>
        </form>


        
      </div>
    </section>
  );
}
