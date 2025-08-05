import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Welcome email to subscriber
    const welcomeEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to The Metal Art Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2C3E50, #34495E); padding: 30px; text-align: center;">
            <h1 style="color: #E67E22; margin: 0;">The Metal Art</h1>
            <p style="color: #fff; margin: 10px 0 0 0;">Welcome to our Newsletter!</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #2C3E50;">Thank you for subscribing!</h2>
            
            <p style="color: #555; line-height: 1.6;">
              You're now part of The Metal Art community! You'll receive:
            </p>
            
            <ul style="color: #555; line-height: 1.6;">
              <li>Latest industry insights and automation trends</li>
              <li>Project updates and case studies</li>
              <li>Technical tips and engineering innovations</li>
              <li>Company news and announcements</li>
              <li>Special offers and early access to new services</li>
            </ul>
            
            <div style="background: #3498DB; padding: 20px; text-align: center; margin: 20px 0;">
              <h3 style="color: #fff; margin: 0 0 10px 0;">Stay Connected</h3>
              <p style="color: #fff; margin: 0;">
                Follow us on social media for daily updates and behind-the-scenes content
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong>The Metal Art Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    // Notification to admin
    const adminNotification = {
      from: process.env.EMAIL_USER,
      to: 'sanjaymalik350@gmail.com',
      subject: 'New Newsletter Subscription - The Metal Art',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2C3E50, #34495E); padding: 30px; text-align: center;">
            <h1 style="color: #E67E22; margin: 0;">The Metal Art</h1>
            <p style="color: #fff; margin: 10px 0 0 0;">New Newsletter Subscription</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #2C3E50;">New Subscriber</h2>
            <p style="color: #555; line-height: 1.6;">
              <strong>Email:</strong> ${email}<br>
              <strong>Date:</strong> ${new Date().toLocaleString()}<br>
              <strong>Source:</strong> Website Newsletter Signup
            </p>
            
            <div style="background: #27AE60; padding: 20px; text-align: center; margin: 20px 0;">
              <p style="color: #fff; margin: 0;">
                <strong>Add this email to your newsletter list!</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(welcomeEmail);
    await transporter.sendMail(adminNotification);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}