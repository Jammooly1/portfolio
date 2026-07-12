import React from 'react';

const Experience = ({ data }) => (
  <section className="mb-10">
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'Present'}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {item.description.map((desc, index) => (
              <li key={`${item.company}-${index}`} className="ml-5 list-disc">
                {desc}
              </li>
            ))}
          </ul>
        </article>
      ))}
  </section>
);

export default Experience;
