import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_GKupyCju_MG9npB6AzBkYCiyeCNXk3Hdd'); // Replace with your Resend API key

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // Send email using Resend
    const response = await resend.emails.send({
      from: 'venganth2001@gmail.com',  // Replace with your email address
      to: 'venganth2001@gmail.com',     // Replace with the recipient's email address
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully', response }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
