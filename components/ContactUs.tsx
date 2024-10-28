import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactUs = () => {
  type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);  // Start the submission state

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        console.log('Email sent successfully', data);
      } else {
        setResponseMessage('Error sending message. Please try again.');
        console.error('Error sending email', data);
      }
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);  // End the submission state
    }
  };

  return (
    <div className="flex justify-center">
      <div className="sm:max-w-lg w-full p-6 bg-white shadow-md rounded-lg">
        {/* <h2 className="text-xl font-semibold mb-4">Contact Us</h2> */}
        <p className="mb-6">Fill in the form below to send us a message.</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Enter the subject" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your message" 
                required 
              />
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" variant="default" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        {responseMessage && (
          <p className="mt-4 text-sm text-center">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
