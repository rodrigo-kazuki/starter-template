"use server";
import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);

export const send = async (emailFormData:z.infer<typeof formSchema>) => {
  
  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodrigotoyotani@gmail.com',
      subject: `Service Request ${emailFormData.firstName} ${emailFormData.lastName} ${emailFormData.postalCode}`,
      react: EmailTemplate({ firstName: emailFormData.firstName, lastName: emailFormData.lastName, postalCode: emailFormData.postalCode, service: emailFormData.service }),
    });
    if(error) {
      throw error;
    }
  } catch(e){
    throw e;
  }
};
