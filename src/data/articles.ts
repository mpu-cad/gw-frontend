import {ArticleInterface} from "../interfaces/articleInterface.ts";

export const ARTICLES: ArticleInterface[] = [
    {
        id: 1,
        title: "The Rise of Artificial Intelligence",
        text: `
            <p>Artificial intelligence (<strong>AI</strong>) has seen significant advancements in recent years, with applications ranging from <em>healthcare</em> to <strong>autonomous vehicles</strong>.</p> 
            <p>This article explores the impact of <strong>AI</strong> on modern society and how it is shaping our future.</p>
        `,
        tags: ["AI", "Technology", "Innovation"]
    },
    {
        id: 2,
        title: "Climate Change and Its Global Impact",
        text: `
            <p><strong>Climate change</strong> remains one of the most pressing issues of our time.</p>
            <p>Rising global temperatures, <em>extreme weather events</em>, and shifting ecosystems are affecting communities around the world.</p>
            <p>This article discusses what can be done to mitigate its impact.</p>
        `,
        tags: ["Climate Change", "Environment", "Global Warming"]
    },
    {
        id: 3,
        title: "10 Tips for Effective Remote Work",
        text: `
            <h3>Top 10 Tips for Remote Work</h3>
            <ul>
                <li>Set up a dedicated workspace</li>
                <li>Establish a daily routine</li>
                <li>Minimize distractions</li>
                <li>Take regular breaks</li>
                <li>Communicate effectively with your team</li>
            </ul>
            <p>Working remotely has become a norm for many professionals. This article explores how to maintain productivity and work-life balance.</p>
        `,
        tags: ["Remote Work", "Productivity", "Work From Home"]
    },
    {
        id: 4,
        title: "The Future of Electric Vehicles",
        text: `
            <p>Electric vehicles (<strong>EVs</strong>) are revolutionizing the <em>automotive industry</em>.</p>
            <p>With governments pushing for sustainable transport, EVs are becoming more accessible and affordable.</p>
            <p>This article explores the future of EVs and the impact on the environment.</p>
        `,
        tags: ["Electric Vehicles", "Automotive", "Sustainability"]
    },
    {
        id: 5,
        title: "Mastering JavaScript: A Beginner's Guide",
        text: `
            <h3>Introduction to JavaScript</h3>
            <p>JavaScript is one of the most popular programming languages in the world.</p>
            <p>This guide covers the basics of JavaScript, including syntax, variables, loops, and functions.</p>
            <p>Whether you're a beginner or looking to solidify your knowledge, this guide has you covered.</p>
        `,
        tags: ["JavaScript", "Programming", "Web Development"]
    },
];
