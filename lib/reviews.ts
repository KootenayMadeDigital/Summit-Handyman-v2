/**
 * Reviews used across the site.
 * These mirror public Trustindex review content so the site still shows real proof
 * when the live feed URL is not configured in the environment.
 */

export type Review = {
  author: string;
  city: string;
  rating: number;
  date: string;
  body: string;
  service?: string;
  source: "google" | "trustindex" | "facebook";
};

export const placeholderReviews: Review[] = [
  {
    author: "Christy King",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2026-01-07",
    body: "Installed a door latch and did a really clean, professional job. Showed up on time, worked efficiently, and left the area tidy. Would definitely recommend for anyone needing reliable, high-quality work done around the home.",
    service: "Door hardware",
    source: "trustindex",
  },
  {
    author: "dan collins",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-10-23",
    body: "Found Brody online and he came over twice to my place to work on a variety of projects I needed help with. I found him to be reliable and friendly, and I was very satisfied with all of the work he did. I will absolutely call him again the next time I need a handyman.",
    service: "Multi-project repairs",
    source: "trustindex",
  },
  {
    author: "Alexandra Turvill",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-10-10",
    body: "Brody did excellent work on a job that went longer than expected as there were problems with our quirky house. We are totally satisfied with how he handled them.",
    service: "Home repairs",
    source: "trustindex",
  },
  {
    author: "Lizanne Scott",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-10-09",
    body: "I found Brody through a community Facebook page. He was great to communicate with, going over my to do list and to set up the appointment. He arrived exactly on time and was very polite and professional. He worked efficiently and the jobs were expertly completed. The next day, after I had paid him, I had a question, so I texted him. He answered right away and proceeded to guide me through the process. He even offered to drop by. I HIGHLY recommend him!",
    service: "To-do list",
    source: "trustindex",
  },
  {
    author: "rebecca oram",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-09-23",
    body: "Summit Handyman! Brody was excellent. Efficient and reasonable pricing. He was polite, fair and honest. Would 100% recommend his services. Thanks Brody! You rock!",
    service: "Home repairs",
    source: "trustindex",
  },
  {
    author: "Corrie Nichols",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-07-13",
    body: "Brody replaced the roofs on both of our sheds and built a new door. The work is excellent quality and he kept us up to date regarding timelines and pricing. Would definitely hire him again.",
    service: "Shed roofs and door build",
    source: "trustindex",
  },
  {
    author: "Fred Taheri",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-06-28",
    body: "First time asking Brody of Summit Handyman to come to our place where we needed to install a TV mount, bidet, shower grab bars and hang a picture frame. Brody did an amazing job, much more than what we were expecting. Now Brody is our handyman and we will ask him for our future house jobs. We definitely recommend him. Thank you Brody.",
    service: "TV mounting and bathroom installs",
    source: "trustindex",
  },
  {
    author: "X Davidson",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-06-23",
    body: "Brody fixed our damaged ceiling. His communication was great the whole process, returned multiple times to complete the job thoroughly and thoughtfully. Very much appreciated was his promptness to arrive at the time agreed upon. His rate was beyond reasonable and we would not hesitate to have him in again or recommend his work to others. You will not be disappointed if you hire him.",
    service: "Ceiling repair",
    source: "trustindex",
  },
  {
    author: "P Forsyth",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-06-13",
    body: "Brody just completed a new set of stairs, railing and gate for us. And a couple of repairs on garage door trim that was rotting. He is definitely very versatile in his knowledge and repairs. All work was done with attention to detail. Great communication, fair and affordable pricing, friendly and honest too. Will definitely be using him in the future and will not hesitate to refer him to friends.",
    service: "Stairs, railing, gate and trim repair",
    source: "trustindex",
  },
  {
    author: "Julia Retel",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-05-10",
    body: "Brody was absolutely amazing. I needed my AC installed properly and he was very communicative and efficient with his time. My AC unit is now installed and ready for summer. Thank you Brody for your help and will use his services in the future!",
    service: "AC installation",
    source: "trustindex",
  },
  {
    author: "Amanda Connolly",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-04-17",
    body: "I cannot say enough good things about Brody at Summit Handyman. He is truly a man of all trades and a rare gem in the world of home improvement and repair. From the moment I reached out, his communication was prompt, professional, and friendly. He showed up on time, got right to work, and completed every task with precision and care. What really stood out was how versatile and knowledgeable he is. There does not seem to be anything he cannot fix or improve. Whether it is small repairs, installations, or more involved home projects, Brody handles it all with confidence, skill, and efficiency. His pricing is incredibly fair and affordable, especially given the quality of work and speed of completion. He works fast but never cuts corners, something that is very hard to find these days. He is trustworthy, respectful of your space, and takes pride in the job being done right. I have already recommended him to friends and family, and I will absolutely be using him again for anything I need around the house. If you are looking for a reliable, talented, and honest handyman, look no further than Brody at Summit Handyman. Thank you again for the incredible work!",
    service: "Home improvement and repair",
    source: "trustindex",
  },
  {
    author: "Katrina S",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-04-08",
    body: "Brody was friendly and punctual. He did a few jobs for me, his workmanship is top quality. Communication was clear, and quotes are accurate. I will be hiring him again in the future as things come up.",
    service: "Home repairs",
    source: "trustindex",
  },
  {
    author: "Jenn Bateman",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-04-07",
    body: "Brody was a great help with jobs we needed done around our place, big and small. Good communication, appreciated quotes before work and let us approve what we needed, stuck to schedule and budget. We are really happy with his work and will have him again when future jobs pop up. Definitely recommend!",
    service: "Big and small home jobs",
    source: "trustindex",
  },
  {
    author: "Basil Green Lawn Care",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-04-07",
    body: "Brody is a really great handyman. Very professional, responsive, and does amazing work. I highly recommend him for any house repairs.",
    service: "House repairs",
    source: "trustindex",
  },
  {
    author: "Aspire Langley",
    city: "Langley, BC",
    rating: 5,
    date: "2025-02-28",
    body: "As a Building Manager, I highly suggest Summit Handyman Services. Brody has been amazing at taking care of multiple unit repairs for my building and my tenants love him. He arrives on time, is prepared, professional, friendly and does quality work. His communication and invoicing have also been great. If I was smart, I would be telling everyone he is terrible so that he does not get so busy that he cannot take care of my projects. Thanks Brody, you rock!",
    service: "Building repairs",
    source: "trustindex",
  },
  {
    author: "Indy Aujla",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-01-24",
    body: "I rarely post reviews, as I save that for the services that have truly been outstanding and I would recommend to my own friends and family. The handyman services that Brody provided to our household were outstanding. Brody came to fix our solid wood pocket door, no easy task, and he went above and beyond. He came in promptly, assessed the situation, took it upon himself to order better quality hardware, returned as soon as he had the hardware in hand, installed the hardware and made it look like he had never even pulled the door or trim apart. He was professional, knowledgeable and courteous, not to mention very fairly priced. We have found our permanent handyman and would not hesitate in referring Brody to anyone that needs or wants the extra help in maintaining their home. Thanks Brody!",
    service: "Pocket door repair",
    source: "trustindex",
  },
  {
    author: "Barbara Gordon",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2025-01-04",
    body: "Great service, Brody was on time and fixed a problem with two sinks in an efficient manner. Highly recommend.",
    service: "Sink repair",
    source: "trustindex",
  },
  {
    author: "Danielle Macey",
    city: "Lower Mainland, BC",
    rating: 5,
    date: "2024-12-24",
    body: "Brody completed a cabinet repair at my rental property. My tenants were impressed with his service, stating that he arrived right on time, did a great job, and was very courteous. I appreciated that he was very responsive, fit my repair into his schedule quickly and provided me with an update when the work was completed along with pictures. Thanks, Brody!",
    service: "Rental property cabinet repair",
    source: "trustindex",
  },
];

/**
 * Aggregate rating shown on home and reviews page. Uses the public review fallback
 * unless a live Trustindex feed supplies fresher data.
 */
export const aggregateRating = {
  rating: 5.0,
  reviewCount: placeholderReviews.length,
};
