# Expo CI/CD Usage Instructions

//TESTING THE CI/CD

# Triggering CI/CD
The below guides the user to get the new changes and create a separate app version on AppCenter
## Steps
The CI/CD is set up for the dev branch. There are two possibilities to trigger CI/CD.
- Make the changes directly on the dev branch, commit and push to the repository
- Make the changes on a separate branch and merge them onto the dev branch.
  
💡 Any commits or merges to the "dev" branch will automatically trigger the CI/CD process.

# Monitoring the CI/CD build
The following steps help check the status of the CI/CD process once the code is merged to dev branch.

## Login to the Expo account
## Select the jhavtech account
![Screenshot 2023-11-27 160509](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/730f1c82-dcf5-4518-a8f2-fea6a027edf9)
## From Projects select snack
![Screenshot 2023-11-27 161358](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/8e796aea-337d-4f94-94c1-0fdf75f84787)
## Select the first build which has settings icon(i.e., build is in progress)
![Screenshot 2023-11-27 161846](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/d6e753ec-22fb-44f9-b103-12bf1088c461)

# Downloading the build onto mobiles
Once the process of uploading the build to EAS is finished, please click on the build entry on the above screen to see the "Install" option.
## Click on Install
![Screenshot 2023-11-27 162344](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/b02f0c39-d949-4346-a12c-b1ae91abd52e)

Once You click on the Install button, there are two ways possible.
- Scan this code with a device

  Open the Camera app and point it at this code. Then tap the notification that appears.
  ![Screenshot 2023-11-27 162647](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/128d8c63-4ae3-4dfe-af93-b369d5f36502)

- Send a link to a device

  Send and open the URL below to install it on a registered device.
  ![Screenshot 2023-11-27 162706](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/de6497f4-7a89-4385-9a9f-ea36d237827b)

# Adding the new users:
To add new users, start by logging into the provided URL and you will find the screenshot below.
## Click on identifiers
![Screenshot 2023-11-27 130019](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/635f06fe-cc69-47e6-baac-e506d1a1b12c)
## Select the Devices from the navbar and click on the Add icon
![Screenshot 2023-11-27 141810](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/19f04c90-c7ad-480e-990e-79acef4a5dba)
## Register a device and click on continue
![Screenshot 2023-11-27 142456](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/1015bdd1-71c8-4510-9c98-83b26793bf57)
## Select Profiles from the navbar and choose your Provisioning Profile
![Screenshot 2023-11-27 142633](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/fce43ef5-6ea0-424f-98fd-16ce2626d3a8)
## Click on Edit and select the device and click on save
![Screenshot 2023-11-27 142757](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/e756b471-e4da-457d-88e4-fb9c7de27883)
## Download the Provisioning Profile
![Screenshot 2023-11-27 143241](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/6c1123f6-bf9b-42ce-9c93-0523d6678304)

## Now Login to Expo and select the Project.
## Select the Credentials under the Project settings
![Screenshot 2023-11-27 143611](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/d6bb345a-9dd3-4bfb-9ee1-e4f17dea2a96)
## Select iOS and click on Application Identifier(com.jhavtech.biblestudy)
![Screenshot 2023-11-27 143829](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/816747eb-8a08-431b-bfa4-9ebc97e70531)
## Select Ad-hoc under build credentials
![Screenshot 2023-11-27 145644](https://github.com/jhavtechstudios/BibleStudyApp/assets/117446916/343689c3-5bb9-48af-93bf-2f77456723f3)
## From the Provisioning Profile section, delete the old Profile and add the new profile.

# 💡 Tip: How to install this build on iOS 16 or above

On devices running iOS 16 or higher, you must turn on Developer Mode if it is not already enabled.

To do so, install the build on your device, and tap the app icon. A system alert will prompt you to enable Developer Mode, Press OK.

Then navigate to Settings > Privacy & Security > Developer Mode and switch on the toggle. You will need to press Restart when prompted. After the device restarts, press Turn On on the system alert that appears and enter your passcode.

