"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import ImageUpload from "@/components/ImageUpload";

export default function ProfilePage() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    profileImage: string;
  } | null>(null);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
        setName(data.name);
        setProfileImage(data.profileImage);
      } catch (error) {
        console.error(error);
        toast("Error fetching user data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [ ]);

  // Handle profile update
  const handleUpdate = async () => {
    try {
      const res = await fetch("/api/users/update-profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, profileImage }),
      });

      if (!res.ok) throw new Error("Could not update profile");

      const updatedUser = await res.json();
      setUser(updatedUser.user);
      setIsEditing(false);
      toast("Your profile was updated successfully.");
    } catch (error) {
      console.error(error);
      toast("Failed to update profile.");
    }
  };

  if (loading)
    return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      {user ? (
        <>
          {isEditing ? (
            <>
              <ImageUpload
                value={profileImage}
                onChange={setProfileImage}
              />
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="mt-4"
              />

              {/* Image Upload Component */}

              <div className="mt-4 flex justify-center gap-4">
                <Button onClick={handleUpdate}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="relative w-[150px] h-[150px] mb-4 mx-auto">
                        <Image src={user.profileImage || "/default-avatar.png"} alt="Uploaded Image" className="rounded-full object-cover" fill />
                      </div>
              <h2 className="text-xl font-bold mt-4">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
              <Button className="mt-4" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            </>
          )}
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}