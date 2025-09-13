import { Course } from "@/utils/types";

// Tech/Web Development Courses (15 courses)

// Tech/Web Development Courses with Enhanced Transcripts
export const webDevelopmentCourses: Course[] = [
  {
    id: "web-1",
    slug: "html-css-fundamentals",
    title: "HTML & CSS Fundamentals",
    description:
      "Master the building blocks of web development with HTML5 and CSS3",
    lessons: 8,
    price: 15000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    category: "Development",
    instructor: "Brad Traversy",
    duration: "6 hours",
    skillLevel: "BEGINNER",
    skillArea: "TECH",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "HTML Document Structure",
        description:
          "Learn the fundamental structure of HTML documents, semantic elements, and best practices for organizing content.",
        duration: "25:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        transcription: `Welcome to HTML Document Structure! I'm excited to guide you through the fundamental building blocks of web development. Today, we'll explore how HTML documents are organized and structured to create meaningful, accessible web content.

Let's start with the basic anatomy of an HTML document. Every HTML document begins with a document type declaration, written as <!DOCTYPE html>. This tells the browser that we're using HTML5, the latest standard. Think of it as introducing yourself at the beginning of a conversation.

Next comes the HTML element, which is the root element that wraps all content on the page. Inside this, we have two main sections: the head and the body. The head element contains metadata about our document, things like the page title, character encoding, and links to external resources like CSS files. This information isn't displayed on the page itself, but it's crucial for browsers and search engines to understand our content properly.

The body element is where all our visible content lives. This includes headings, paragraphs, images, links, and all the interactive elements users will see and interact with. Now, let's talk about semantic elements, which are HTML elements that clearly describe their meaning to both browsers and developers.

Instead of using generic div elements everywhere, HTML5 introduced semantic elements like header, nav, main, article, section, aside, and footer. These elements help structure our content in a meaningful way. For example, the header element typically contains introductory content or navigation links, while the main element represents the dominant content of the page.

The nav element is specifically for navigation links, and the footer element contains information about the author, copyright data, or links to related documents. Using these semantic elements improves accessibility for users with screen readers and helps search engines better understand your content structure.

When organizing content, always think about hierarchy. Use heading elements h1 through h6 to create a logical structure. Your page should have only one h1 element, which represents the main topic, followed by h2 elements for major sections, and h3, h4, h5, and h6 for subsections.

Best practices for HTML structure include using proper indentation to make your code readable, choosing semantic elements over generic ones when possible, and ensuring your content makes sense even without CSS styling. Remember, HTML is about structure and meaning, not appearance. That's what CSS is for.

As we wrap up, remember that good HTML structure is the foundation of accessible, maintainable web development. Take time to plan your document structure before you start coding, and always validate your HTML to catch any errors early. In our next lesson, we'll build upon this foundation as we explore CSS styling basics.`,
      },
      {
        id: "2",
        title: "CSS Styling Basics",
        description:
          "Discover CSS selectors, properties, and styling techniques to make your web pages visually appealing.",
        duration: "35:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        transcription: `Welcome to CSS Styling Basics! Now that you understand HTML structure, let's dive into CSS, which stands for Cascading Style Sheets. CSS is what transforms plain HTML documents into visually appealing, professional-looking websites.

CSS works by selecting HTML elements and applying visual styles to them. The fundamental concept here is the CSS rule, which consists of a selector and a declaration block. The selector tells CSS which HTML elements to target, while the declaration block contains one or more declarations that define how those elements should look.

Let's start with selectors. The most basic selector is the element selector, where you simply write the HTML tag name like h1, p, or div. This applies styles to all instances of that element. For more specific targeting, we have class selectors, which use a dot followed by the class name, like .highlight or .button. Classes are incredibly useful because you can apply the same style to multiple elements across your page.

ID selectors use a hash symbol followed by the ID name, like #header or #navigation. Remember, IDs should be unique on a page, so use them sparingly. We also have attribute selectors, which target elements based on their attributes, and pseudo-class selectors like :hover, :focus, and :first-child, which apply styles based on the element's state or position.

Now, let's explore CSS properties. Color properties include color for text color and background-color for backgrounds. You can specify colors using names like 'red', hexadecimal values like #ff0000, RGB values like rgb(255, 0, 0), or HSL values for more intuitive color manipulation.

Typography properties are essential for readable, attractive text. Font-family lets you specify which fonts to use, always including fallbacks like 'Arial, sans-serif'. Font-size controls text size, using units like pixels, ems, or rems. Font-weight makes text bold or light, while text-align controls alignment, and line-height affects the spacing between lines of text.

The box model is crucial to understand. Every HTML element is essentially a rectangular box consisting of content, padding, border, and margin. Content is the actual text or images, padding is the space inside the element around the content, border is a line around the padding, and margin is the space outside the border that separates the element from others.

When styling, always think about hierarchy and consistency. Use consistent spacing, colors, and typography throughout your site. Group related styles together in your CSS file, and use comments to organize your code. Consider creating a color palette and typography system before you start styling.

CSS specificity determines which styles get applied when multiple rules target the same element. Inline styles have the highest specificity, followed by IDs, then classes, then element selectors. Understanding this helps you write more predictable CSS and debug styling issues more effectively.

As you practice CSS, start simple and gradually add complexity. Focus on creating clean, readable code, and don't be afraid to experiment. CSS is very forgiving, and the best way to learn is by trying different approaches and seeing what works. In our next lesson, we'll explore responsive design principles to make your websites look great on all devices.`,
      },
      {
        id: "3",
        title: "Responsive Design Principles",
        description:
          "Create websites that work perfectly on all devices using responsive design techniques.",
        duration: "42:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/srvUrASNdaU",
        transcription: `Welcome to Responsive Design Principles! In today's multi-device world, your websites need to look and function perfectly whether someone is viewing them on a smartphone, tablet, laptop, or large desktop monitor. Responsive design is the approach that makes this possible.

Responsive design is built on three fundamental principles: flexible layouts, flexible media, and media queries. Let's start with flexible layouts. Instead of using fixed pixel widths, responsive design uses relative units like percentages, ems, and viewport units. This allows your layout to adapt to different screen sizes automatically.

The viewport is crucial for responsive design. It's the visible area of a web page on the user's screen. Always include the viewport meta tag in your HTML head: <meta name="viewport" content="width=device-width, initial-scale=1">. This ensures your page renders at the device's actual width rather than being zoomed out to fit a desktop layout.

Media queries are CSS rules that apply different styles based on device characteristics, primarily screen width. The most common approach is mobile-first design, where you write CSS for mobile devices first, then use media queries to enhance the layout for larger screens. This ensures a solid foundation on smaller devices where space is limited.

Common breakpoints are around 480px for mobile, 768px for tablets, and 1024px or 1200px for desktops, but these should be based on your content rather than specific devices. Use min-width media queries for mobile-first design: @media (min-width: 768px) { /* tablet styles */ }.

Flexible grids are essential for responsive layouts. CSS Grid and Flexbox are modern layout methods that make creating responsive designs much easier. Grid is excellent for two-dimensional layouts, while Flexbox excels at one-dimensional layouts and alignment. Both can adapt to different screen sizes automatically when used properly.

Images and media must also be responsive. Use max-width: 100% and height: auto on images to make them scale down on smaller screens. For more control, consider using the picture element with different image sources for different screen sizes, or CSS background images with media queries.

Typography should also respond to screen size. Use relative units like em or rem for font sizes, and consider adjusting line heights and spacing for different devices. Larger screens can handle more text per line, while mobile devices need more generous spacing for touch interactions.

Navigation is one of the biggest responsive design challenges. Desktop navigation menus often don't work well on mobile devices due to space constraints. Common solutions include hamburger menus, accordion-style navigation, or simplified menu structures for smaller screens.

Touch considerations are crucial for mobile responsive design. Ensure interactive elements like buttons and links are at least 44px by 44px to be easily tappable. Provide adequate spacing between interactive elements to prevent accidental taps, and consider hover states that don't apply to touch devices.

Performance is closely tied to responsive design. Smaller devices often have slower connections and less processing power. Optimize images, minify CSS and JavaScript, and consider loading different resources for different devices to improve performance on mobile networks.

Testing your responsive designs across various devices and screen sizes is essential. Use browser developer tools to simulate different viewports, but also test on actual devices when possible. Pay attention to how your content flows, whether interactive elements are usable, and if the overall experience feels natural on each device type.

Remember, responsive design isn't just about making things smaller. It's about creating optimal experiences for each device type. Sometimes this means reorganizing content, hiding less important elements on smaller screens, or presenting information in completely different ways. The goal is always to serve your users' needs effectively, regardless of how they access your site.`,
      },
      {
        id: "4",
        title: "CSS Flexbox Layout",
        description:
          "Master the flexbox layout system for creating flexible and responsive web layouts.",
        duration: "28:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc",
        transcription: `Welcome to CSS Flexbox Layout! Flexbox, or the Flexible Box Layout, is a powerful CSS layout method that makes it easier to design flexible and responsive layout structures. It's particularly excellent for distributing space and aligning items in one dimension, either horizontally or vertically.

Flexbox operates on two main concepts: flex containers and flex items. When you apply display: flex to an element, it becomes a flex container, and all its direct children automatically become flex items. This parent-child relationship is fundamental to understanding how flexbox works.

The flex container has two axes: the main axis and the cross axis. By default, the main axis runs horizontally from left to right, while the cross axis runs vertically from top to bottom. However, you can change this with the flex-direction property, which accepts values like row, row-reverse, column, and column-reverse.

Let's explore the key flex container properties. Flex-direction determines the direction of the main axis. Justify-content controls alignment along the main axis with values like flex-start, center, flex-end, space-between, space-around, and space-evenly. These properties give you precise control over how items are positioned and spaced within the container.

Align-items controls alignment along the cross axis, with values similar to justify-content: stretch, flex-start, center, flex-end, and baseline. Align-items affects all flex items simultaneously, while align-self can be used on individual flex items to override the container's align-items value.

The flex-wrap property determines whether flex items should wrap to new lines when they don't fit in the container. By default, flexbox tries to fit all items on one line, which might cause them to shrink. Setting flex-wrap to wrap allows items to wrap to new lines, while nowrap keeps everything on one line.

Now let's look at flex item properties. The flex property is a shorthand for flex-grow, flex-shrink, and flex-basis. Flex-grow determines how much a flex item should grow relative to other items when there's extra space. Flex-shrink determines how much an item should shrink when space is limited. Flex-basis sets the initial size of a flex item before free space is distributed.

Common flex values include flex: 1, which makes items grow equally to fill available space, flex: 0 0 auto, which prevents growing and shrinking, and flex: none, which is equivalent to flex: 0 0 auto. Understanding these values helps you create layouts that adapt beautifully to different screen sizes.

Flexbox is perfect for common layout patterns. Center content both horizontally and vertically by setting justify-content: center and align-items: center on the flex container. Create equal-height columns by using align-items: stretch. Build navigation bars where some items stay left and others align right using justify-content: space-between.

For responsive design, flexbox shines in creating layouts that adapt automatically. Use flex-wrap: wrap with appropriate flex-basis values to create responsive grids without media queries. Items will automatically wrap to new lines when the container becomes too narrow.

Common flexbox use cases include navigation bars, card layouts, centering content, creating equal-height columns, and building responsive galleries. Flexbox is also excellent for form layouts, where you might want labels and inputs to align properly regardless of content length.

Debugging flexbox can be tricky initially. Use browser developer tools to visualize flex containers and items. Most modern browsers highlight flex containers and show the main and cross axes when you inspect flex elements. This visual feedback is invaluable for understanding how your flex properties are working.

Best practices for flexbox include starting with the container properties before adjusting individual items, using flex shorthand rather than individual properties when possible, and remembering that flexbox is designed for one-dimensional layouts. For two-dimensional layouts with both rows and columns, CSS Grid might be more appropriate.

Flexbox has excellent browser support in modern browsers, making it a reliable choice for production websites. It's become an essential tool for modern CSS layouts, and mastering it will significantly improve your ability to create flexible, responsive designs efficiently.`,
      },
      {
        id: "5",
        title: "CSS Grid System",
        description:
          "Learn CSS Grid for creating complex, two-dimensional layouts with ease.",
        duration: "38:50",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
        transcription: `Welcome to CSS Grid System! CSS Grid is a revolutionary layout system that allows you to create complex, two-dimensional layouts with unprecedented control and flexibility. Unlike Flexbox, which works in one dimension, Grid handles both rows and columns simultaneously, making it perfect for creating sophisticated web layouts.

CSS Grid introduces a completely new way of thinking about layouts. Instead of floating elements or using positioning tricks, Grid lets you define a grid structure and then place elements precisely where you want them. This approach is more intuitive and much more powerful than traditional layout methods.

To create a grid, apply display: grid to a container element. This container becomes a grid container, and its direct children become grid items. The magic happens when you define the grid structure using grid-template-columns and grid-template-rows properties.

Grid-template-columns defines the columns of your grid. You can use various units: fixed units like pixels, relative units like percentages or fr units, or flexible sizing with auto. For example, grid-template-columns: 200px 1fr 100px creates three columns: a 200-pixel fixed column, a flexible column that takes remaining space, and a 100-pixel fixed column.

The fr unit is unique to CSS Grid and represents a fraction of available space. It's incredibly useful for creating flexible layouts. Grid-template-columns: 1fr 2fr 1fr creates three columns where the middle column is twice as wide as the side columns.

Grid-template-rows works similarly to columns but defines horizontal tracks. You can also use the repeat function for repetitive patterns: grid-template-columns: repeat(3, 1fr) creates three equal columns, which is much more concise than writing 1fr 1fr 1fr.

Grid lines are the invisible lines that separate grid tracks. They're numbered starting from 1, and you can use these numbers to position grid items. Grid-column: 1 / 3 makes an item span from the first grid line to the third, occupying two columns. You can also use span notation: grid-column: span 2.

Grid areas provide a more intuitive way to position items. You can name grid lines using square brackets: grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end]. Then reference these names when positioning items: grid-column: sidebar-start / sidebar-end.

The grid-template-areas property offers an even more visual approach. You can create a template that looks like a layout diagram, using strings to represent different areas of your grid. This makes complex layouts very readable and maintainable.

Grid gaps control the spacing between grid tracks. Grid-gap is shorthand for grid-row-gap and grid-column-gap. Unlike margins, grid gaps don't add space around the outside of the grid, only between items, making them perfect for consistent spacing in layouts.

Implicit grids handle situations where you have more items than defined grid positions. CSS Grid automatically creates additional rows or columns as needed. You can control the size of these implicit tracks with grid-auto-rows and grid-auto-columns properties.

Grid alignment works on two levels: aligning the entire grid within its container and aligning individual items within their grid areas. Justify-content and align-content control grid alignment within the container, while justify-items and align-items control item alignment within their cells.

Individual grid items can override container alignment using justify-self and align-self. This granular control allows you to create sophisticated layouts where different items have different alignment behaviors.

CSS Grid excels at creating responsive layouts without media queries. Using functions like minmax, auto-fit, and auto-fill, you can create grids that automatically adjust to available space. Grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) creates a responsive grid where items are at least 300 pixels wide and automatically wrap to new rows.

Common Grid patterns include the Holy Grail layout with header, footer, sidebar, and main content areas, magazine-style layouts with items of different sizes, and card grids that automatically adjust to screen size. Grid makes these previously complex layouts straightforward to implement.

Grid and Flexbox work beautifully together. Use Grid for the overall page layout structure, then use Flexbox for component-level layouts within grid items. This combination gives you the best of both layout systems.

Browser support for CSS Grid is excellent in modern browsers. All major browsers support the complete Grid specification, making it safe to use in production. For older browsers, you can provide fallbacks using feature queries with @supports.

Debugging CSS Grid is made easier by excellent browser developer tools. Most browsers can visualize grid lines, areas, and gaps, making it easy to understand how your grid is structured and why items are positioned as they are.

As you learn Grid, start with simple layouts and gradually increase complexity. Practice creating common layout patterns, and experiment with different grid properties to understand how they interact. CSS Grid represents the future of web layout, and mastering it will dramatically improve your ability to create sophisticated, responsive designs.`,
      },
      {
        id: "6",
        title: "Forms and Input Validation",
        description:
          "Build interactive forms with proper validation and user experience considerations.",
        duration: "32:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/rsd4FNGTRBw",
        transcription: `Welcome to Forms and Input Validation! Forms are the primary way users interact with web applications, whether they're signing up for accounts, making purchases, or submitting feedback. Creating effective forms requires understanding HTML form elements, implementing proper validation, and designing excellent user experiences.

HTML provides numerous form elements for different types of data input. The form element wraps all form controls and defines where and how the form data will be submitted. Input elements are the most common form controls, with different types for various data: text, email, password, number, date, and many more.

Input types are crucial for both functionality and user experience. Type="email" provides built-in email validation and shows appropriate keyboards on mobile devices. Type="tel" is optimized for phone numbers, type="date" provides date pickers, and type="number" includes increment controls and prevents non-numeric input.

Labels are essential for accessibility and usability. Every form control should have an associated label element. Use the 'for' attribute on labels to explicitly associate them with form controls by ID, or wrap the input inside the label element. Screen readers rely on labels to understand what each form field represents.

Textarea elements handle multi-line text input, perfect for comments or messages. Select elements create dropdown menus for choosing from predefined options. Use option elements within select, and set selected="selected" for default choices. The multiple attribute allows users to select multiple options.

Fieldset and legend elements group related form controls together, which improves both visual organization and accessibility. This is particularly useful for complex forms with multiple sections, like shipping and billing information in checkout forms.

HTML5 introduced built-in validation attributes that provide client-side validation without JavaScript. The required attribute makes fields mandatory, while pattern accepts regular expressions for custom validation rules. Min and max attributes work with numeric and date inputs to set acceptable ranges.

Client-side validation enhances user experience by providing immediate feedback, but never rely on it exclusively for security. Always implement server-side validation as well, since client-side validation can be bypassed. Think of client-side validation as a user experience enhancement, not a security measure.

Custom validation messages improve the user experience significantly. Use the setCustomValidity method in JavaScript to provide more helpful error messages than the browser defaults. Show validation feedback near the relevant form fields, not just at the top of the form.

Styling form elements requires careful consideration of both aesthetics and usability. Ensure form fields have adequate padding for comfortable interaction, especially on touch devices. Use consistent styling across all form elements, and provide clear visual feedback for different states: normal, focused, valid, and invalid.

Focus management is crucial for keyboard users and screen reader users. Ensure a logical tab order using the tabindex attribute when necessary. Provide visible focus indicators, and consider automatically focusing the first form field when appropriate.

Progressive enhancement applies well to forms. Start with a functional HTML form that works without JavaScript, then enhance it with client-side validation, dynamic field updates, and improved user interface elements. This ensures your form works for all users regardless of their technology capabilities.

Error handling should be helpful and specific. Instead of generic "invalid input" messages, explain exactly what's wrong and how to fix it. For example, "Password must be at least 8 characters long and include at least one number" is much more helpful than "Invalid password."

Consider the mobile experience when designing forms. Use appropriate input types to trigger the right keyboards, ensure form fields are large enough for touch interaction, and minimize the amount of typing required. Auto-complete attributes help users fill forms faster by leveraging browser-stored information.

Form security considerations include protecting against cross-site scripting attacks by properly sanitizing input data, using HTTPS for sensitive data transmission, and implementing proper authentication and authorization checks. Never trust client-side data without server-side verification.

Accessibility in forms goes beyond labels and includes providing helpful instructions, error messages that are announced to screen readers, and ensuring forms are fully navigable by keyboard. Use ARIA attributes when necessary to provide additional context for assistive technologies.

User experience best practices include minimizing the number of required fields, providing real-time validation feedback, using clear and concise labels, and offering helpful placeholder text that doesn't replace labels. Consider multi-step forms for complex processes to reduce cognitive load.

Testing forms thoroughly across different browsers, devices, and with various assistive technologies ensures they work for all users. Pay special attention to error states, validation behavior, and the overall flow from start to successful submission.

Modern form libraries and frameworks can speed up development while maintaining good practices, but understanding the fundamentals of HTML forms and validation is essential for creating robust, accessible, and user-friendly web applications.`,
      },
      {
        id: "7",
        title: "CSS Animations and Transitions",
        description:
          "Add smooth animations and transitions to enhance user interaction and engagement.",
        duration: "29:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/8kK-cA99SA0",
        transcription: `Welcome to CSS Animations and Transitions! Animation brings life to web interfaces, creating engaging experiences that guide users' attention and provide visual feedback. When used thoughtfully, animations improve usability and create delightful interactions that make your websites memorable.

CSS transitions are the simplest way to add smooth changes between different states of an element. Transitions work automatically when CSS properties change, whether triggered by hover states, focus, class changes through JavaScript, or any other CSS property modification.

The transition property is shorthand for four individual properties: transition-property specifies which CSS properties should animate, transition-duration sets how long the animation takes, transition-timing-function controls the speed curve, and transition-delay adds a pause before the animation starts.

Transition-duration uses time units like seconds or milliseconds. Common durations range from 0.2s for quick feedback animations to 0.5s for more noticeable state changes. Longer durations can feel sluggish, while very short ones might be missed entirely.

Timing functions dramatically affect how animations feel. Ease is the default, starting slowly, speeding up, then slowing down at the end. Linear maintains constant speed throughout. Ease-in starts slowly and accelerates, while ease-out starts quickly and decelerates. Ease-in-out combines both, starting and ending slowly.

For more control, use cubic-bezier timing functions. Tools like cubic-bezier.com help you create custom timing curves. You can create bouncy effects, subtle easing, or dramatic accelerations that match your design's personality.

Not all CSS properties can be animated. Generally, properties with numeric values, colors, and certain keyword values can transition smoothly. Width, height, opacity, transform properties, and colors work well. Properties like display, visibility, and font-family change instantly and can't be smoothly animated.

CSS animations provide much more control than transitions. While transitions react to state changes, animations can run automatically, loop indefinitely, and include multiple keyframes with complex timing. Define animations using the @keyframes rule, which specifies the styles at various points during the animation sequence.

Keyframes can be defined using percentages or the keywords 'from' and 'to'. From represents 0%, and to represents 100%. You can include as many intermediate keyframes as needed: 0%, 25%, 50%, 75%, 100% for fine-grained control over the animation sequence.

The animation property is shorthand for eight individual properties. Animation-name references the @keyframes rule, animation-duration sets the length, animation-timing-function controls the speed curve, animation-delay adds a start delay, animation-iteration-count determines repetition, animation-direction controls playback direction, animation-fill-mode affects styles before and after animation, and animation-play-state allows pausing.

Transform animations are particularly smooth because they don't trigger layout recalculations. Translate moves elements, rotate spins them, scale changes size, and skew distorts shape. These transforms are hardware-accelerated in most browsers, resulting in smoother performance than animating position or size properties.

Opacity animations are also highly performant and commonly used for fade effects. Combining transform and opacity animations creates smooth, efficient animations that work well across devices and browsers.

Performance considerations are crucial for smooth animations. Avoid animating properties that cause layout recalculation, like width, height, left, or top. Stick to transform and opacity when possible. Use will-change CSS property to hint to browsers about upcoming animations, but remove it after animations complete.

Animation best practices include keeping durations appropriate for the effect, using easing that feels natural, and ensuring animations enhance rather than distract from content. Respect users who prefer reduced motion by using the prefers-reduced-motion media query to provide alternative experiences.

Hover effects should be subtle and purposeful. Button hover states might include slight color changes, gentle scaling, or shadow adjustments. Link hover effects could involve color transitions or underline animations. These micro-interactions provide immediate feedback and improve the interactive feel of your interface.

Loading animations keep users engaged during wait times. Spinning icons, progress bars, and skeleton screens all use CSS animations to indicate activity. These animations should loop smoothly and not be visually overwhelming.

Page transition effects can create a cohesive experience as users navigate your site. Fade ins, slide effects, and staggered animations for content sections can make page loads feel more polished and intentional.

Complex animations might benefit from animation libraries like Animate.css or from CSS-in-JS solutions, but understanding the fundamentals helps you create custom animations that perfectly match your design requirements.

Testing animations across different devices and browsers ensures consistent experiences. Pay attention to performance on older devices and consider providing simplified animations or disabling them entirely on low-powered devices.

Remember that animation should serve a purpose: guiding attention, providing feedback, indicating state changes, or creating emotional connections. Gratuitous animations can become annoying and actually hurt user experience. The best animations often go unnoticed while making interfaces feel more responsive and alive.`,
      },
      {
        id: "8",
        title: "Building Your First Website",
        description:
          "Put everything together to create a complete, professional website from start to finish.",
        duration: "45:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/916GWv2Qs08",
        transcription: `Welcome to Building Your First Website! This is where we bring together everything you've learned about HTML and CSS to create a complete, professional website from scratch. We'll plan the structure, write semantic HTML, apply responsive CSS styling, and deploy your finished site to the web.

Before writing any code, we need to plan our website. Let's create a personal portfolio site that showcases your skills and projects. Start by sketching the layout on paper or using a design tool. Our site will include a header with navigation, a hero section introducing yourself, an about section, a projects showcase, and a contact form with footer.

Planning the content structure is crucial. We'll use semantic HTML5 elements: header for site navigation, main for primary content, section elements for different content areas, article elements for individual projects, aside for supplementary content, and footer for contact information and links.

Let's start with the HTML structure. Begin with the HTML5 doctype and basic document setup. Include the viewport meta tag for responsive design, link to your CSS file, and add a meaningful title and description. Structure your content using semantic elements, ensuring the HTML makes sense even without any styling.

The header section should include your site logo or name and navigation menu. Use a nav element with an unordered list for navigation links. This structure is accessible, semantic, and easy to style. Include links to all major sections of your site, using anchor links for same-page navigation.

Create a compelling hero section that immediately communicates who you are and what you do. This section should grab visitors' attention and encourage them to explore further. Use appropriate heading hierarchy starting with an h1 for your main headline, followed by a subtitle and call-to-action button.

The about section tells your story and builds connection with visitors. Include a professional photo, compelling biography, and highlights of your skills or experience. Structure this content clearly with appropriate headings and well-organized paragraphs that are easy to scan.

For the projects section, create a grid or card layout showcasing your best work. Each project should include an image, title, brief description, and links to view the project and its source code. Use consistent structure across all project cards to maintain visual harmony.

The contact section should include a functional contact form with fields for name, email, and message. Apply proper form validation and ensure accessibility with labels and appropriate input types. Also include alternative contact methods like email address or social media links.

Now let's apply CSS styling, starting with a CSS reset or normalize to ensure consistent rendering across browsers. Establish your design system with consistent colors, typography, and spacing values. Define these as CSS custom properties for easy maintenance and updates.

Typography is crucial for professional appearance. Choose web-safe fonts or Google Fonts that reflect your personal brand. Establish a clear hierarchy with different font sizes, weights, and colors for headings, body text, and UI elements. Ensure sufficient contrast for accessibility.

Create a cohesive color scheme using a primary color for key elements like buttons and links, secondary colors for accents, and neutral colors for text and backgrounds. Use color psychology to convey the right emotional tone for your personal brand.

Implement responsive design from the start using mobile-first approach. Write base styles for mobile devices, then use media queries to enhance the layout for tablets and desktops. Test your design at various screen sizes to ensure everything looks and works properly.

The navigation should be responsive, perhaps using a hamburger menu for mobile devices. Implement smooth scrolling for anchor links and highlight the current section in the navigation. Add hover effects and transitions to make interactions feel smooth and professional.

Style the hero section to make a strong first impression. Consider using background images, gradients, or subtle animations to create visual interest. Ensure text remains readable and the call-to-action button stands out prominently.

Create an attractive layout for the projects section`,
      },
    ],
  },
  {
    id: "web-2",
    slug: "javascript-essentials",
    title: "JavaScript Essentials",
    description:
      "Learn modern JavaScript programming from basics to advanced concepts",
    lessons: 10,
    price: 18000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
    category: "Development",
    instructor: "Mosh Hamedani",
    duration: "8 hours",
    skillLevel: "BEGINNER",
    skillArea: "TECH",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "JavaScript Fundamentals",
        description:
          "Understanding variables, data types, operators, and basic programming concepts in JavaScript.",
        duration: "32:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
        transcription: "",
      },
      {
        id: "2",
        title: "Functions and Scope",
        description:
          "Master functions, parameters, return values, and understanding scope in JavaScript.",
        duration: "28:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/N8ap4k_1QEQ",
        transcription: "",
      },
      {
        id: "3",
        title: "DOM Manipulation",
        description:
          "Learn to interact with HTML elements and create dynamic web pages using the DOM.",
        duration: "38:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/5fb2aPlgoys",
        transcription: "",
      },
      {
        id: "4",
        title: "Event Handling",
        description:
          "Handle user interactions through event listeners and create responsive web applications.",
        duration: "25:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/XF1_MlZ5l6M",
        transcription: "",
      },
      {
        id: "5",
        title: "Arrays and Objects",
        description:
          "Work with complex data structures including arrays, objects, and their methods.",
        duration: "35:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/R8rmfD9Y5-c",
        transcription: "",
      },
      {
        id: "6",
        title: "Async JavaScript & Promises",
        description:
          "Understanding asynchronous programming, promises, and modern async/await syntax.",
        duration: "42:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/PoRJizFvM7s",
        transcription: "",
      },
      {
        id: "7",
        title: "ES6+ Features",
        description:
          "Explore modern JavaScript features including arrow functions, destructuring, and modules.",
        duration: "33:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/nZ1DMMsyVyI",
        transcription: "",
      },
      {
        id: "8",
        title: "Error Handling",
        description:
          "Learn proper error handling techniques using try-catch blocks and error objects.",
        duration: "22:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/cFTFtuEQ-10",
        transcription: "",
      },
      {
        id: "9",
        title: "API Integration",
        description:
          "Connect your applications to external APIs using fetch and handle JSON data.",
        duration: "36:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/cuEtnrL9-H0",
        transcription: "",
      },
      {
        id: "10",
        title: "Building a Complete Project",
        description:
          "Create a full JavaScript application putting together all the concepts you've learned.",
        duration: "55:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/dtKciwk_si4",
        transcription: "",
      },
    ],
  },
  {
    id: "web-3",
    slug: "react-development",
    title: "React Development Masterclass",
    description:
      "Build modern web applications with React.js and understand component-based architecture",
    lessons: 12,
    price: 25000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    category: "Development",
    instructor: "Academind",
    duration: "10 hours",
    skillLevel: "INTERMEDIATE",
    skillArea: "TECH",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "React Fundamentals",
        description:
          "Introduction to React, JSX syntax, and understanding the component-based architecture.",
        duration: "38:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM",
        transcription: "",
      },
      {
        id: "2",
        title: "Components and Props",
        description:
          "Creating reusable components and passing data through props effectively.",
        duration: "32:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
        transcription: "",
      },
      // ... Additional lessons
    ],
  },
  // Continue with more web development courses...
];

// Business Courses (15 courses)
export const businessCourses: Course[] = [
  {
    id: "biz-1",
    slug: "business-fundamentals",
    title: "Business Fundamentals",
    description:
      "Essential principles of business management, strategy, and operations",
    lessons: 8,
    price: 20000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    category: "Business",
    instructor: "Harvard Business Review",
    duration: "7 hours",
    skillLevel: "BEGINNER",
    skillArea: "BUSINESS",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "Introduction to Business",
        description:
          "Understanding what business is, different types of businesses, and the role of entrepreneurship.",
        duration: "28:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/gGBiBjxnw0o",
        transcription: "",
      },
      {
        id: "2",
        title: "Business Planning Essentials",
        description:
          "Learn how to create effective business plans and set strategic objectives for success.",
        duration: "35:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/bfOxM2xoEjQ",
        transcription: "",
      },
      {
        id: "3",
        title: "Marketing Fundamentals",
        description:
          "Basic marketing concepts, target audience identification, and promotional strategies.",
        duration: "42:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/Unzc731iCUY",
        transcription: "",
      },
      {
        id: "4",
        title: "Financial Management",
        description:
          "Understanding cash flow, budgeting, and basic financial statements for business.",
        duration: "38:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/WEDIj9JBTC8",
        transcription: "",
      },
      {
        id: "5",
        title: "Operations Management",
        description:
          "Efficiently managing business operations, supply chain, and quality control processes.",
        duration: "33:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/kErHalsFxHA",
        transcription: "",
      },
      {
        id: "6",
        title: "Human Resources Basics",
        description:
          "Recruiting, managing, and developing employees for organizational success.",
        duration: "29:50",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/x_jdogqr6O0",
        transcription: "",
      },
      {
        id: "7",
        title: "Leadership and Management",
        description:
          "Developing leadership skills and effective management techniques for teams.",
        duration: "36:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/VGcX8JBSqGU",
        transcription: "",
      },
      {
        id: "8",
        title: "Business Ethics and Law",
        description:
          "Understanding legal requirements, ethical considerations, and corporate responsibility.",
        duration: "31:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/CKlb70VZ6gQ",
        transcription: "",
      },
    ],
  },
  {
    id: "biz-2",
    slug: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description:
      "Comprehensive guide to online marketing, social media, and digital advertising",
    lessons: 10,
    price: 22000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "Business",
    instructor: "Neil Patel",
    duration: "8 hours",
    skillLevel: "INTERMEDIATE",
    skillArea: "BUSINESS",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "Digital Marketing Overview",
        description:
          "Introduction to digital marketing channels, strategies, and the modern marketing landscape.",
        duration: "32:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4",
        transcription: "",
      },
      {
        id: "2",
        title: "Content Marketing Strategy",
        description:
          "Creating compelling content that engages audiences and drives business results.",
        duration: "38:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/B_8cqF9f9lU",
        transcription: "",
      },
      // ... Additional lessons
    ],
  },
  // Continue with more business courses...
];

// Design Courses (15 courses)
export const designCourses: Course[] = [
  {
    id: "design-1",
    slug: "graphic-design-fundamentals",
    title: "Graphic Design Fundamentals",
    description:
      "Master the core principles of visual design, typography, and color theory",
    lessons: 9,
    price: 18000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    category: "Design",
    instructor: "Gareth David",
    duration: "7 hours",
    skillLevel: "BEGINNER",
    skillArea: "DESIGN",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "Design Principles",
        description:
          "Understanding balance, contrast, alignment, repetition, and hierarchy in visual design.",
        duration: "28:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/YqQx75OPRa0",
        transcription: "",
      },
      {
        id: "2",
        title: "Color Theory and Psychology",
        description:
          "Learn how colors affect emotions and create harmonious color palettes for your designs.",
        duration: "35:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/Qj1FK8n7WgY",
        transcription: "",
      },
      {
        id: "3",
        title: "Typography Fundamentals",
        description:
          "Master font selection, hierarchy, spacing, and readability in typographic design.",
        duration: "32:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/QrNi9FmdlxY",
        transcription: "",
      },
      {
        id: "4",
        title: "Layout and Composition",
        description:
          "Create visually appealing layouts using grids, white space, and compositional techniques.",
        duration: "29:35",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/a5KYlHNKQB8",
        transcription: "",
      },
      {
        id: "5",
        title: "Adobe Photoshop Basics",
        description:
          "Essential Photoshop tools and techniques for photo editing and digital design creation.",
        duration: "42:50",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/IpzJCobE5aE",
        transcription: "",
      },
      {
        id: "6",
        title: "Adobe Illustrator Essentials",
        description:
          "Vector graphics creation, logo design, and illustration techniques in Illustrator.",
        duration: "38:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/c5HS3nCFw9U",
        transcription: "",
      },
      {
        id: "7",
        title: "Brand Identity Design",
        description:
          "Creating cohesive brand identities including logos, colors, and visual guidelines.",
        duration: "33:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/6h3RJhoqgK8",
        transcription: "",
      },
      {
        id: "8",
        title: "Print Design Fundamentals",
        description:
          "Understanding print requirements, resolution, color modes, and preparing files for print.",
        duration: "27:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/zMpQdkzJ8nQ",
        transcription: "",
      },
      {
        id: "9",
        title: "Portfolio Development",
        description:
          "Building a professional design portfolio that showcases your skills and attracts clients.",
        duration: "31:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/vYRhWMRwcmw",
        transcription: "",
      },
    ],
  },
  // Continue with more design courses...
];

// Creative Arts Courses (15 courses)
export const creativeArtsCourses: Course[] = [
  {
    id: "arts-1",
    slug: "digital-illustration-basics",
    title: "Digital Illustration Basics",
    description:
      "Learn digital drawing techniques, tools, and creative processes for illustration",
    lessons: 8,
    price: 16000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
    category: "Creative Arts",
    instructor: "Proko",
    duration: "6 hours",
    skillLevel: "BEGINNER",
    skillArea: "CREATIVE_ARTS",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "Drawing Fundamentals",
        description:
          "Basic drawing techniques, line work, shapes, and developing hand-eye coordination.",
        duration: "35:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/piKV9SCmKx8",
        transcription: "",
      },
      {
        id: "2",
        title: "Digital Tools and Software",
        description:
          "Introduction to digital art software, brushes, layers, and essential tools.",
        duration: "28:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/a-IS5U0L_Zk",
        transcription: "",
      },
      // ... Additional lessons
    ],
  },
  // Continue with more creative arts courses...
];

// Languages Courses (15 courses)
export const languagesCourses: Course[] = [
  {
    id: "lang-1",
    slug: "english-communication-skills",
    title: "English Communication Skills",
    description:
      "Improve your spoken and written English for professional and personal success",
    lessons: 10,
    price: 15000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    category: "Languages",
    instructor: "Oxford English",
    duration: "8 hours",
    skillLevel: "BEGINNER",
    skillArea: "LANGUAGES",
    contentType: "VIDEO",
    learningStyle: "SELF_PACE_MODULES",
    videos: [
      {
        id: "1",
        title: "English Grammar Basics",
        description:
          "Essential grammar rules, sentence structure, and common grammatical mistakes to avoid.",
        duration: "32:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/8-zPdp_uSJs",
        transcription: "",
      },
      {
        id: "2",
        title: "Vocabulary Building",
        description:
          "Expanding your vocabulary with practical words and phrases for daily communication.",
        duration: "28:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/VXEkKRUsWDk",
        transcription: "",
      },
      // ... Additional lessons
    ],
  },
  // Continue with more language courses...
];

// Function to get courses based on user preferences
export const getCoursesBySkillArea = (skillArea: string): Course[] => {
  switch (skillArea) {
    case "TECH":
      return webDevelopmentCourses;
    case "BUSINESS":
      return businessCourses;
    case "DESIGN":
      return designCourses;
    case "CREATIVE_ARTS":
      return creativeArtsCourses;
    case "LANGUAGES":
      return languagesCourses;
    default:
      return [
        ...webDevelopmentCourses.slice(0, 3),
        ...businessCourses.slice(0, 3),
        ...designCourses.slice(0, 3),
      ];
  }
};

// Combine all courses
export const allCourses: Course[] = [
  ...webDevelopmentCourses,
  ...businessCourses,
  ...designCourses,
  ...creativeArtsCourses,
  ...languagesCourses,
];
