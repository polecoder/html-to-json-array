# HTML to JSON Array Converter

## Description

This converts a fragment of HTML code into a JSON formatted array. The array is made of all the individual HTML lines transformed into strings.

## How to use?

Enter your HTML code in the first textarea and click on the "Convert" button. The JSON Array will appear in the second textarea. You can copy the JSON Array by clicking on the "Copy code" button. Make sure that the text is indented correctly, if not, the JSON result will inherit the wrong indentation.

## Example

From this HTML code:

```html
<div id="dropdownMenu" class="overflow-hidden transition-[opacity,max-height] duration-700 ease-[cubic-bezier(0.78,0.02,0.2,1)] max-h-0 opacity-0 md:overflow-auto md:transition-none md:max-h-none md:opacity-100">
  <ul class="border-t-2 border-white md:border-0 md:flex md:h-full">
    <li class="border-b-[1px] border-white md:border-0">
      <a class="px-3 py-1 block md:h-full md:flex md:items-center" href="#"><span>Link 1</span></a>
    </li>
    <li class="border-b-[1px] border-white md:border-0">
      <a class="px-3 py-1 block md:h-full md:flex md:items-center" href="#"><span>Link 2</span></a>
    </li>
    <li class="border-b-[1px] border-white md:border-0">
      <a class="px-3 py-1 block md:h-full md:flex md:items-center" href="#"><span>Link 3</span></a>
    </li>
    <li>
      <a class="px-3 py-1 block md:h-full md:flex md:items-center" href="#"><span>Link 4</span></a>
    </li>
  </ul>
</div>
```

You get the following JSON result:

```json
[
  "<div id=\"dropdownMenu\" class=\"overflow-hidden transition-[opacity,max-height] duration-700 ease-[cubic-bezier(0.78,0.02,0.2,1)] max-h-0 opacity-0 md:overflow-auto md:transition-none md:max-h-none md:opacity-100\">",
  "  <ul class=\"border-t-2 border-white md:border-0 md:flex md:h-full\">",
  "    <li class=\"border-b-[1px] border-white md:border-0\">",
  "      <a class=\"px-3 py-1 block md:h-full md:flex md:items-center\" href=\"#\"><span>Link 1</span></a>",
  "    </li>",
  "    <li class=\"border-b-[1px] border-white md:border-0\">",
  "      <a class=\"px-3 py-1 block md:h-full md:flex md:items-center\" href=\"#\"><span>Link 2</span></a>",
  "    </li>",
  "    <li class=\"border-b-[1px] border-white md:border-0\">",
  "      <a class=\"px-3 py-1 block md:h-full md:flex md:items-center\" href=\"#\"><span>Link 3</span></a>",
  "    </li>",
  "    <li>",
  "      <a class=\"px-3 py-1 block md:h-full md:flex md:items-center\" href=\"#\"><span>Link 4</span></a>",
  "    </li>",
  "  </ul>",
  "</div>"
]
```

## Motivation behind this project

This is a project created for the benefits of another of my personal ones. I needed to create formatted JSON arrays from HTML snippets for the creation of the other project ([link here](https://github.com/polecoder/tcsg)).

## Contribute

If you have any ideas to add to this project let me know using the "Issues" section of this repository, or by creating a fork to add a new feature. 

## License

Distributed under the MIT license. See LICENSE for more information.

Thank you for your time. Have a great day! 👋