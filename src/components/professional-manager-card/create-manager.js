import { Button, NativeSelect, TextInput } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useRef } from "react";

export default function CreateManager() {
    const openRef = useRef(null);
    return <div className="card admin-card-wedget">

        <div className="card-body p-0">
            <div className="row side-gap-0">
                <div className="col-lg-6">
                    <TextInput
                        placeholder="First name"
                        
                    />
                </div>
                <div className="col-lg-6">
                    <TextInput
                        placeholder="Last name"
                        
                    />
                </div>
                <div className="col-lg-12">
                    <TextInput
                        placeholder="Email address"
                        
                    />
                </div>
                <div className="col-lg-12">
                    <TextInput
                        placeholder="Contact number"
                        
                    />
                </div>
                <div className="col-lg-12">
                    <TextInput
                        placeholder="Location"
                        
                    />
                </div>
                <div className="col-lg-12">
                    <TextInput
                        placeholder="Designation"
                        
                    />
                </div>
                <div className="col-lg-12">
                <Dropzone
        openRef={openRef}
        onDrop={(files) => {console.log('accepted files', files)}}
        activateOnClick={false} className="file-select-input"
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        
          <button onClick={() => openRef.current()} className="file-load-btn"><span className="icon"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.9669 -7.60645e-08C17.9279 -3.40552e-08 18.707 0.779091 18.707 1.74015L18.707 32.1927C18.707 33.1538 17.9279 33.9329 16.9669 33.9329C16.0058 33.9329 15.2267 33.1538 15.2267 32.1927L15.2267 1.74015C15.2267 0.779091 16.0058 -1.18074e-07 16.9669 -7.60645e-08Z" fill="#47B6F4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 17.8368C0 16.8758 0.779091 16.0967 1.74015 16.0967L32.1927 16.0967C33.1538 16.0967 33.9329 16.8758 33.9329 17.8368C33.9329 18.7979 33.1538 19.577 32.1927 19.577L1.74015 19.577C0.779091 19.577 0 18.7979 0 17.8368Z" fill="#47B6F4"/>
</svg>
</span>Upload documents/ID</button>
        
      </Dropzone>
                </div>
                <div className="col-lg-12">
                <NativeSelect
                    data={['Assign client/Task', 'submenu 1', 'submenu 2', 'submenu 3']}
                    withAsterisk
                    />
                </div>
                <div className="col-lg-12 actions place-center mt-5">
                <Button>
      Add Professional Manager
    </Button>
                </div>
                
            </div>
        </div>
    </div>
}