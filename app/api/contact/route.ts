import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_hAMpwt8y_3yWAULKoA7V6rPPvgm6PQNAK');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organisation, email, phone, reachOutFor, message } = body;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px; background-color: #ffffff;">
        <div style="background-color: #081226; color: #ffffff; padding: 20px; text-align: center; border-radius: 4px 4px 0 0;">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px;">ARVENTIS PARTNERS</h1>
          <p style="margin: 5px 0 0 0; font-style: italic; font-size: 12px; color: #c5a880;">New Client Mandate Enquiry</p>
        </div>
        <div style="padding: 20px; color: #081226; line-height: 1.6;">
          <h3 style="color: #081226; border-bottom: 2px solid #c5a880; padding-bottom: 8px;">Mandate Classification: ${reachOutFor || 'General'}</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Organisation:</td>
              <td style="padding: 8px 0;">${organisation || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #faf6ee; border-left: 4px solid #c5a880; border-radius: 2px;">
            <strong style="display: block; margin-bottom: 8px; color: #081226;">Enquiry Parameters / Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #333333;">${message}</p>
          </div>
        </div>
        <div style="padding: 15px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; margin-top: 20px;">
          Processed under strict NDA protocols. © 2026 Arventis Partners.
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'contact@arventispartners.com',
      to: 'arventis-partners@googlegroups.com',
      subject: `[New Mandate Enquiry] ${name} - ${reachOutFor || 'General'}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Email Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
