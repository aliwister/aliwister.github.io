# aliwister.github.io

Personal academic homepage, built by GitHub Pages with plain Jekyll (no theme).

## Editing

| What | File |
|------|------|
| News | `_data/news.yml` (newest first; items past `news_visible` fold under "Older news") |
| Publications | one file per paper in `_papers/<slug>.md`, which also becomes the page `/papers/<slug>/` (see below) |
| Experience, education, teaching, service, research interests | `_data/cv.yml` |
| Bio text | `index.html` (the `intro` block) |
| Name, links, avatar | `_config.yml` (`author:`) |
| Styling | `assets/css/main.css` |

## Adding a paper

Copy an existing file in `_papers/` and edit its front matter:

- `order` sets the position in the list (1 = top); `group` is `preprint`, `conference` or `workshop`
- `authors` is a comma-separated string; "Ali Al-Lawati" is bolded and `†` marks equal contribution
- `links`: the first link is where the title points on the home page (keep arXiv first)
- `arxiv`, `doi`, `conference`, `pdf`, `date` feed the Google Scholar `citation_*` tags and the schema.org data
- `abstract` and `bibtex` are shown on the paper page; `alt_title` is an older arXiv title, if different
- optional: `selected: true`, `award`, `tldr`, `note`, `image` (thumbnail, ~600x360)

## Local preview

```bash
bundle install
bundle exec jekyll serve
```
