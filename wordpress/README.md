# Denis Ruksha website: moving the redesign to WordPress

This folder contains **`denis-ifs-2026`**, a WordPress theme that turns the version 1 design
(https://claude.ai/artifact/7VMmNVpnBEK9Ft7pYutpBq) into a real, editable WordPress site.

- It is built only from normal WordPress blocks, so Denis edits text, photos, buttons and questions by clicking and typing. No code.
- It is a **separate theme**. His current theme (`denis-ifs`) stays installed, so going back is one click.
- It **does not touch his plugins**. Jetpack (contact form, stats), Gutenberg and the others keep working, because a theme change never removes plugins.
- Fonts are bundled inside the theme (no Google Fonts requests, which is better for privacy in the EU).

`denis-ifs-2026.zip` (next to this file) is the file you upload to WordPress.

Denis's site is hosted on **WordPress.com** (a Business-type plan with Jetpack). Menu names below are
WordPress.com's; they may be worded slightly differently on your screen.

---

## Step 1: Back up the current site to your PC (do this first)

Make all three backups. Together they let you rebuild the old site exactly as it is today.

1. **Full site backup (files and database).** In WordPress.com, open Denis's site, go to **Jetpack → Backup** (sometimes listed just as *Backup*), pick the latest backup and choose **Download backup**. When it is ready, save the `.zip` to your PC, for example in a folder called `denisruksha-backup-<date>`.
2. **Content export.** In the WordPress admin, go to **Tools → Export → Export all** (or *Download*). This gives an `.xml` file with all pages, posts and menus. Save it in the same folder. If you're offered a separate **media export**, download that too.
3. **The current theme with its design.** Go to **Appearance → Editor**, open the **⋮ (Options)** menu at the top and choose **Export**. This downloads `denis-ifs.zip`, his current theme including every change made in the Site Editor. Save it in the same folder.

Keep that folder somewhere safe (and ideally a second copy in cloud storage).

## Step 2: Make a private test copy (staging site)

On WordPress.com, open the site and look for **Staging site** (under the site's *Settings* or *Hosting* section). Choose **Add staging site**.
This creates a private copy with the same pages, media, plugins and settings. Visitors never see it.
**Do all of the following on the staging site, not on denisruksha.com.**

## Step 3: Install the new theme on the staging site

1. In the staging site's admin: **Appearance → Themes → Add New Theme → Upload Theme**.
2. Choose `denis-ifs-2026.zip` and click **Install Now**, then **Activate**.

## Step 4: Put the new design on each page

The theme comes with ready-made page designs ("patterns"). For each page:

| Page | Pattern to insert | Template (right sidebar → Page → Template) |
|---|---|---|
| Home | **Full page: Homepage** | leave as is (the homepage uses its own layout) |
| IFS (`/ifs/`) | **Full page: What's IFS** | **Page without title (designed pages)** |
| Fees (`/fees/`) | **Full page: Fees** | **Page without title (designed pages)** |
| Blog (`/blog/`) | **Full page: Blog** | **Page without title (designed pages)** |

How to insert a pattern:
1. Open the page in **Pages**. Select all the old content (click into it, press Ctrl+A / Cmd+A twice) and delete it.
2. Click the **+** (top left) → **Patterns** → **Denis: full pages** → click the pattern.
3. **Save**.

## Step 5: Check the staging site

- Click through Home, IFS, Fees, Blog, on a computer and a phone.
- **Contact form:** fill it in and send a test message to make sure it reaches Denis. The form uses Jetpack, like his current one. If the form area shows an error in the editor, delete that block and insert a new **Form → Contact Form** block in the same place.
- Check the menu links and the "Book a free intro" button.

## Step 6: Go live

When everything looks right on staging, use **Push to production** on the staging site (WordPress.com copies the staging site over the live one; choose to include both files and database if asked).
Alternatively, repeat Steps 3 and 4 on the live site, which is quick now that you know the steps.

## If anything goes wrong

- **Quick undo:** **Appearance → Themes**, activate **denis-ifs** again. His old pages' content is still in the backup from Step 1 if needed.
- **Full restore:** WordPress.com **Jetpack → Backup** → choose a backup from before the change → **Restore**. Or use the files saved on your PC.

---

## Guide for Denis: editing the site yourself

Everything is edited in the normal WordPress editor. Click a page or post, click on what you want to change, and type.

| I want to… | How |
|---|---|
| Change any text | Click it and type. Press **Save**. |
| Replace a photo | Click the photo → **Replace** in the toolbar → choose from the Media Library or upload. |
| Change a button's text or link | Click the button to edit the words; click the 🔗 link icon to change where it goes. |
| Add or edit a question in "Common questions" | Each question is a **Details** block. Click a question to edit it. To add one, select a question and choose **⋮ → Duplicate**, then edit the copy. |
| Add a topic card ("What can we work on?") | Select a card (use the **List view** button at the top to find it), **⋮ → Duplicate**, then change the label, title and text. |
| Add a character | Click **+**, search **"Part character"**, insert it. In the right sidebar choose **which part** (Worry, Self, Inner critic…) and its **size**. |
| Highlight words in yellow (like "queer folks") | Select the words and make them **bold** (Ctrl+B / Cmd+B). In the big headings, bold shows as a yellow highlighter. |
| Change the scrolling banner | Click the banner text and edit it. Separate the items with ✱ (copy one from the existing text). |
| Write a blog post | **Posts → Add New**. Choose the starter **Blog post: article**, or **Blog post: picture story** for a story told in pictures. Replace the example text, add a **Featured image** in the right sidebar (it appears on the blog page), and **Publish**. New posts appear on the Blog page automatically. |
| Picture story | Each picture is a coloured box with a character and a sentence. Duplicate a box to add a picture; change its background colour in the right sidebar. Readers can scroll down or swipe right. |
| Change the menu | **Appearance → Editor → Navigation**. |
| Change colours or fonts everywhere | **Appearance → Editor → Styles**. |
| Change prices | Open the **Fees** page and edit the numbers and text directly. |

Tips:
- **Undo** with Ctrl+Z / Cmd+Z, or open **⋮ → Revisions** on a page to go back to an earlier saved version.
- The **List view** button (three lines, top left) shows every block on the page, which makes it easy to select a whole section.
- Ready-made sections (hero, questions, contact form…) are under **+ → Patterns → Denis: page sections**, if one ever gets deleted by accident.

---

## Notes for whoever maintains the theme

- Theme files: `denis-ifs-2026/` (`theme.json` for colours, fonts and spacing; `style.css` for the design; `patterns/` for the ready-made sections; `blocks/character` for the Part character block; `assets/js/characters.js` draws the characters).
- **Stripe background:** the theme uses `assets/images/stripes.jpg` if it exists (Denis's shirt-fabric image) and falls back to drawn stripes otherwise. To use the fabric image, add it to the theme as `assets/images/stripes.jpg`, zip the theme again and re-upload.
- **Tested** on a local WordPress 7.1 install: every page and post opens in the editor with no invalid blocks, and nothing scrolls sideways on desktop or phone. The Jetpack contact form could not be tested locally (Jetpack needs a WordPress.com connection), so check it on staging.
