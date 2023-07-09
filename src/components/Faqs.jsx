import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does it work?',
      answer:
        'Snap \'n Track is an app that allows you to capture your golf practice sessions and provides valuable insights and analysis to help you improve your game. Simply record your swings or shots using the app, and it will analyze and provide feedback on your performance.',
    },
    {
      question: 'Can I use the app on any golf course?',
      answer:
        'Absolutely! Snap \'n Track is designed to be versatile and can be used on any golf course, driving range, short game area, or even at home. It adapts to different practice environments to enhance your skills.',
    },
    {
      question: 'How can I compete with my friends?',
      answer:
        'We offer a friendly competition feature where you can challenge your friends to golfing contests or drills. You can compare scores and see who comes out on top on the leaderboards.',
    },
  ],
  [
    {
      question: 'Can I get personalized training programs?',
      answer:
        'While our focus is on capturing and analyzing your short game practice sessions, we currently do not offer personalized training programs. However, the valuable insights provided by Snap \'n Track can help you identify areas for improvement and guide your practice routine effectively.',
    },
    {
      question: 'Can I use the app without an internet connection?',
      answer:
        'Yes, Snap \'n Track works offline as well. You can record your practice sessions and access previously saved data without an internet connection. However, some features, such as leaderboard updates, will require an internet connection.',
    },
    {
      question: 'Is the app available for both iOS and Android devices?',
      answer:
        'Absolutely! Snap \'n Track is available for both iOS and Android platforms. You can find and download it from the respective app stores.',
    },
  ],
  [
    {
      question: 'Can the app be used by golfers of all skill levels?',
      answer:
        'Absolutely! Snap \'n Track is designed to cater to golfers of all skill levels, from beginners to advanced players. It provides valuable insights and analysis that can benefit anyone looking to improve their game.',
    },
    {
      question: 'Is the app free to use, or are there paid features?',
      answer:
        'We offer both free and paid features. The app can be downloaded and used for free, providing access to basic functionality. However, there are additional premium features and advanced analytics available through a paid subscription, unlocking even more insights and customization options for your golf practice.',
    },
    {
      question: 'Can I sync my data across multiple devices?',
      answer:
        'Yes, by signing in with your account, you can seamlessly sync your practice session data across multiple devices, ensuring that your progress and insights are always up to date regardless of which device you use to access the app.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:support@snapandtrack.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
