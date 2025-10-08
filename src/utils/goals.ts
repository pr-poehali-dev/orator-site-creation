declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string) => void;
  }
}

export const trackGoal = (goalName: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(101026698, 'reachGoal', goalName);
    console.log(`Goal tracked: ${goalName}`);
  }
};

export const GOALS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PHONE_CLICK: 'phone_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  COURSE_SIGNUP_CLICK: 'course_signup_click',
} as const;
