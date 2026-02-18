import { Review, Service, PriceItem, GalleryImage } from './types';
import React from 'react';

export const PHONE_NUMBER = "0406 298 111";
export const PHONE_LINK = "tel:0406298111";
export const ADDRESS = "455 Wellington Rd, Wheelers Hill VIC 3150";
export const EMAIL = "info@superbdoggrooming.com.au";
export const INSTAGRAM_LINK = "https://www.instagram.com/superb.doggrooming/?hl=en";
export const FACEBOOK_LINK = "https://www.facebook.com/Superbdoggrooming/";

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Ashley Bretherton',
    rating: 5,
    text: "Great groomer, very lovely service for my anxious dog. Highly recommend."
  },
  {
    id: '2',
    name: 'Tahlia Cummaudo',
    rating: 5,
    text: "Jan was excellent… Luna left looking gorgeous and was so happy she didn’t want to leave!"
  },
  {
    id: '3',
    name: 'Sarah Attard',
    rating: 5,
    text: "My dog Poppy loves her visits and always leaves clean and happy… such a dog lover."
  },
  {
    id: '4',
    name: 'Daniel Panakos',
    rating: 5,
    text: "Fantastic job on my giant schnauzer… hard to find a good groomer… highly recommend."
  },
  {
    id: '5',
    name: 'Necmi Acar',
    rating: 5,
    text: "An artist in dog grooming… they came out looking like supermodel dogs!"
  },
  {
    id: '6',
    name: 'Libby Cleland',
    rating: 5,
    text: "First time with my puppy… best thing was staying… grooming was amazing."
  },
  {
    id: '7',
    name: 'Kristy McDonald',
    rating: 5,
    text: "Great with our nervous rough collie… listened to what we wanted… looked amazing."
  },
  {
    id: '8',
    name: 'Skye Yu',
    rating: 5,
    text: "My Japanese spitz was extremely matted… patiently brushed out the mats… loves what she does."
  },
  {
    id: '9',
    name: 'Rex Stubbs',
    rating: 5,
    text: "Professional and caring… patient… happy and looks handsome."
  },
  {
    id: '10',
    name: 'Jay Aston',
    rating: 5,
    text: "Professional, reliable… gentle and caring… we won’t take our pet to anyone else."
  },
  {
    id: '11',
    name: 'Isabelle Woolfe',
    rating: 5,
    text: "We took Maple to Jan at Suburb groomers who did a fantastic job! The moment from meeting Jan you know she truely cares about her job and giving the dogs the best cut possible. She did an amazing job and definitely recommend for anyone wanting a job done by someone so passionate about what she does ☺️"
  },
  {
    id: '12',
    name: 'Hannah',
    rating: 5,
    text: "Genuinely lives up to it's name -- Superb! This is Lilla's third time to Jan, and as always she does an amazing job in turning her from shaggy to round and fluffy!! Thank you again Superb Dog Grooming!!"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'full-groom',
    title: 'Full Grooming',
    description: 'The full package including bath and full body clip.',
    bestFor: 'Shorter Coat Length / Breed Style',
    includes: ['Warm hydrobath with premium shampoo', 'Blow dry & fluff', 'Full body clip or scissor style', 'Nail trim & filing', 'Ear cleaning', 'Anal Glands (upon request)'],
    duration: '1.5 - 2.5 hrs',
    priceStr: 'From $80',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
    pricingTiers: [
      { label: '< 5kg', price: '$80' },
      { label: '5 - 10kg', price: '$95' },
      { label: '10 - 15kg', price: '$110' },
      { label: '15 - 20kg', price: '$125' },
      { label: '> 20kg', price: 'Varies' }
    ]
  },
  {
    id: 'bath-tidy',
    title: 'Tidy Up',
    description: 'Maintenance trim around the face, tail and hygiene area.',
    bestFor: 'Maintenance between haircuts',
    includes: ['Warm hydrobath', 'Blow dry', 'Face/Feet/Bum trim', 'Nail trim', 'Brushing', 'Sanitary clip'],
    duration: '1 - 1.5 hrs',
    priceStr: 'From $60',
    image: 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=2070&auto=format&fit=crop',
    pricingTiers: [
      { label: '< 5kg', price: '$60' },
      { label: '5 - 10kg', price: '$70' },
      { label: '10 - 15kg', price: '$80' },
      { label: '15 - 20kg', price: '$90' },
      { label: '> 20kg', price: '$100+' }
    ]
  },
  {
    id: 'deshed',
    title: 'Premium Bath & Deshed',
    description: 'Bath service redefined! Deep clean and deshed.',
    bestFor: 'Double-coated breeds (Huskies, Retrievers, Pugs)',
    includes: ['Deep cleansing bath', 'High-velocity dry to remove coat', 'Undercoat removal (20 mins)', 'Nail trim', 'Ear clean'],
    duration: '1.5 - 2 hrs',
    priceStr: 'From $50',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
    pricingTiers: [
      { label: 'Small', price: '$50' },
      { label: 'Medium', price: '$65' },
      { label: 'Large', price: '$85' },
      { label: 'X-Large', price: '$100+' }
    ]
  },
  {
    id: 'puppy',
    title: 'Puppy Intro',
    description: 'A gentle first experience for the little ones.',
    bestFor: 'Puppies under 5 months',
    includes: ['Gentle bath', 'Slow drying', 'Introduction to clippers sound', 'Face tidy', 'Lots of cuddles & treats'],
    duration: '45 mins - 1 hr',
    priceStr: 'From $45',
    image: 'https://images.unsplash.com/photo-1591854219801-58d0d47f4f17?q=80&w=1887&auto=format&fit=crop',
    pricingTiers: [
      { label: 'Under 5 Months', price: '$45 - $60' }
    ]
  },
  {
    id: 'senior',
    title: 'Senior Comfort',
    description: 'Extra time and patience for older friends.',
    bestFor: 'Older dogs or those with arthritis',
    includes: ['Non-slip mats', 'Regular breaks', 'Supportive handling', 'Style focused on comfort/hygiene'],
    duration: 'Varies',
    priceStr: 'Varies',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cat',
    title: 'Cat Grooming',
    description: 'Feline-friendly grooming for our purring friends.',
    bestFor: 'Cats with mats or long coats',
    includes: ['Dry foam wash or wet wash', 'Mat removal (clip)', 'Nail trim', 'Call to confirm suitability'],
    duration: '1 hr',
    priceStr: 'From $90',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2070&auto=format&fit=crop',
    pricingTiers: [
      { label: 'Short Hair', price: '$90' },
      { label: 'Long Hair', price: '$110' },
      { label: 'Lion Clip', price: '$130' }
    ]
  }
];

export const PRICES: PriceItem[] = [
  { size: 'Small', breedExample: 'Maltese, Shih Tzu', price: '$80' },
  { size: 'Medium', breedExample: 'Cocker Spaniel, Cavoodle', price: '$95' },
  { size: 'Large', breedExample: 'Golden Retriever, Labradoodle', price: '$120' },
  { size: 'X-Large', breedExample: 'Newfoundland, St Bernard', price: '$150+' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Before & Afters
  { 
    id: 'ba1', 
    category: 'before-after', 
    caption: 'Matted to Magnificent', 
    beforeUrl: 'https://www.shutterstock.com/image-photo/before-after-dog-grooming-bichon-600nw-2302391451.jpg',
    afterUrl: 'https://www.shutterstock.com/image-photo/before-after-dog-grooming-bichon-600nw-2302391451.jpg'
  },
  { 
    id: 'ba2', 
    category: 'before-after', 
    caption: 'Summer Clip Transformation', 
    beforeUrl: 'https://pamperedfloof.com.au/wp-content/uploads/2024/03/IMG_0839.jpg',
    afterUrl: 'https://pamperedfloof.com.au/wp-content/uploads/2024/03/IMG_0839.jpg'
  },
  { 
    id: 'ba3', 
    category: 'before-after', 
    caption: 'Puppy\'s First Tidy', 
    beforeUrl: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=600&auto=format&fit=crop',
    afterUrl: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'ba4', 
    category: 'before-after', 
    caption: 'Deshedding Miracle', 
    beforeUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop',
    afterUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop'
  },
  // Single Images
  { id: '1', category: 'dog', caption: 'Happy Samoyed', url: 'https://images.unsplash.com/photo-1529429612779-c8e40df2f5ce?q=80&w=600&auto=format&fit=crop' },
  { id: '2', category: 'puppy', caption: 'Tiny Paws', url: 'https://images.unsplash.com/photo-1591854219801-58d0d47f4f17?q=80&w=600&auto=format&fit=crop' },
  { id: '4', category: 'dog', caption: 'Fresh and clean', url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop' },
  { id: '5', category: 'cat', caption: 'Feline friend', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop' },
  { id: '6', category: 'senior', caption: 'Gentle touch', url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop' },
  { id: '7', category: 'dog', caption: 'Ready for the park', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop' },
  { id: '8', category: 'dog', caption: 'Big smile', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop' },
  { id: '9', category: 'senior', caption: 'Golden Oldie', url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop' },
  { id: '10', category: 'cat', caption: 'Soft Kitty', url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600&auto=format&fit=crop' },
];
