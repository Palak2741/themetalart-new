import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, timeline, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Email to business owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sanjaymalik350@gmail.com',
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2C3E50, #34495E); padding: 30px; text-align: center;">
            <h1 style="color: #E67E22; margin: 0;">The Metal Art</h1>
            <p style="color: #fff; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #2C3E50; border-bottom: 2px solid #E67E22; padding-bottom: 10px;">
              Contact Details
            </h2>
            
            <table style="width: 100%; margin: 20px 0;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #2C3E50;">Name:</td>
                <td style="padding: 10px 0; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #2C3E50;">Email:</td>
                <td style="padding: 10px 0; color: #555;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #2C3E50;">Phone:</td>
                <td style="padding: 10px 0; color: #555;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #2C3E50;">Service:</td>
                <td style="padding: 10px 0; color: #555;">${service || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #2C3E50;">Timeline:</td>
                <td style="padding: 10px 0; color: #555;">${timeline || 'Not specified'}</td>
              </tr>
            </table>
            
            <h3 style="color: #2C3E50; margin-top: 30px;">Message:</h3>
            <div style="background: #fff; padding: 20px; border-left: 4px solid #E67E22; margin: 10px 0;">
              ${message}
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #E67E22; text-align: center;">
              <p style="color: #fff; margin: 0;">
                <strong>Follow up promptly to convert this lead!</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting The Metal Art - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2C3E50, #34495E); padding: 30px; text-align: center;">
            <h1 style="color: #E67E22; margin: 0;">The Metal Art</h1>
            <p style="color: #fff; margin: 10px 0 0 0;">Engineering Excellence</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #2C3E50;">Dear ${name},</h2>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for reaching out to The Metal Art! We have received your inquiry about 
              <strong>${service || 'our services'}</strong> and appreciate your interest in our 
              engineering solutions.
            </p>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #3498DB; margin: 20px 0;">
              <h3 style="color: #2C3E50; margin-top: 0;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>Our technical team will review your requirements within 24 hours</li>
                <li>We'll contact you to discuss your project in detail</li>
                <li>If needed, we'll schedule a site visit or technical consultation</li>
                <li>You'll receive a comprehensive proposal tailored to your needs</li>
              </ul>
            </div>
            
            <div style="background: #E67E22; padding: 20px; text-align: center; margin: 20px 0;">
              <h3 style="color: #fff; margin: 0 0 10px 0;">Need Immediate Assistance?</h3>
              <p style="color: #fff; margin: 0;">
                Call us at <strong>+91 9416943116</strong> or <strong>+91 7206028377</strong>
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong>The Metal Art Team</strong><br>
              Gohana, Haryana<br>
              info@themetalart.com
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}