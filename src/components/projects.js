import React from 'react';

const Projects = ({ data }) => (
  <section className="mb-10">
    <h1 className="section-header">Projects</h1>
    {data.map(item => (
      <article className="my-5" key={item.name}>
        <h2 className="item-header">{item.name}</h2>
        <h3 className="item-sub">{item.company}</h3>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          {item.description.map((desc, index) => (
            <li key={`${item.name}-${index}`} className="ml-5 list-disc">
              {desc}
            </li>
          ))}
        </ul>
        {item.link !== '' && (
          <div className="flex justify-end mt-3">
            <a
              className="btn btn-secondary"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        )}
      </article>
    ))}
  </section>
);

export default Projects;
